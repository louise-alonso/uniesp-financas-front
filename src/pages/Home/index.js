import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Platform, TouchableOpacity, Modal, FlatList, Image, Alert } from 'react-native';
import { Background } from "../Login/styles";
import { mockDashboardData } from '../../mocks/data';
import { styles } from './styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import { deleteTransaction } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

export default function Home() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filteredSummary, setFilteredSummary] = useState({ balance: 0, income: 0, expenses: 0 });

  // Função para atualizar os valores dinamicamente
  function updateDashboard(newTransactions) {
    let income = 0;
    let expenses = 0;
    newTransactions.forEach(item => {
      if (item.type === 'income') income += item.amount;
      else expenses += item.amount;
    });
    setDashboardData({
      balance: income - expenses,
      income,
      expenses,
      recentTransactions: newTransactions
    });
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDashboardData(mockDashboardData);
      setFilteredTransactions(mockDashboardData.recentTransactions);
      // Inicializa o resumo com todos os dados
      let income = 0;
      let expenses = 0;
      mockDashboardData.recentTransactions.forEach(item => {
        if (item.type === 'income') income += item.amount;
        else expenses += item.amount;
      });
      setFilteredSummary({ balance: income - expenses, income, expenses });
      setLoading(false);
    }, 500);
  }, []);

  // Handler para filtrar por data
  const handleFilter = () => {
    if (!selectedDate) return;
    const filtered = dashboardData.recentTransactions.filter(item => item.date === selectedDate);
    // Calcule saldo, entradas e saídas com base no filtro
    let income = 0;
    let expenses = 0;
    filtered.forEach(item => {
      if (item.type === 'income') income += item.amount;
      else expenses += item.amount;
    });
    setFilteredTransactions(filtered);
    setFilteredSummary({ balance: income - expenses, income, expenses });
    setShowCalendar(false);
  };

  // Função para deletar uma transação
  const handleDeleteTransaction = async (id) => {
    console.log("Botão de deletar clicado para ID:", id);
    
    if (window.confirm("Tem certeza que deseja excluir esta transação?")) {
      try {
        console.log("Iniciando processo de deleção...");
        
        const userId = await AsyncStorage.getItem('userId');
        console.log("ID do usuário:", userId);
        
        if (!userId) {
          throw new Error('ID do usuário não encontrado');
        }
        
        console.log("Chamando API de deleção...");
        const result = await deleteTransaction(id);
        console.log("Resposta da API:", result);
        
        // Atualiza as transações filtradas
        const newFilteredTransactions = filteredTransactions.filter(item => item.id !== id);
        setFilteredTransactions(newFilteredTransactions);

        // Atualiza os dados do dashboard
        const newDashboardTransactions = dashboardData.recentTransactions.filter(item => item.id !== id);
        const newDashboardData = {
          ...dashboardData,
          recentTransactions: newDashboardTransactions
        };
        setDashboardData(newDashboardData);

        // Atualiza o resumo
        let income = 0;
        let expenses = 0;
        newFilteredTransactions.forEach(item => {
          if (item.type === 'income') income += item.amount;
          else expenses += item.amount;
        });
        setFilteredSummary({ balance: income - expenses, income, expenses });

        window.alert("Transação excluída com sucesso!");
      } catch (error) {
        window.alert(`Erro ao deletar: ${error.message}`);
      }
    } else {
      console.log("Deleção cancelada pelo usuário");
    }
  };

  if (loading) {
    return (
      <Background>
        <ActivityIndicator size="large" color="#6567DD" />
      </Background>
    );
  }

  return (
    <Background>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 0 }}>
        {/* Cards grandes, quadrados e responsivos, scroll horizontal */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsRowScroll} contentContainerStyle={{ paddingLeft: 12, paddingRight: 12 }}>
          <View style={[styles.cardBigSquare, { backgroundColor: '#6567DD' }]}> 
            <Text style={styles.cardLabelBig}>Saldo atual</Text>
            <Text style={styles.cardValueBig}>R$ {filteredSummary.balance.toFixed(2)}</Text>
          </View>
          <View style={[styles.cardBigSquare, { backgroundColor: '#00B94A' }]}> 
            <Text style={styles.cardLabelBig}>Entradas de hoje</Text>
            <Text style={styles.cardValueBig}>R$ {filteredSummary.income.toFixed(2)}</Text>
          </View>
          <View style={[styles.cardBigSquare, { backgroundColor: '#EF463A' }]}> 
            <Text style={styles.cardLabelBig}>Saídas de hoje</Text>
            <Text style={styles.cardValueBig}>R$ {filteredSummary.expenses.toFixed(2)}</Text>
          </View>
        </ScrollView>

        {/* Header de movimentações e lista agrupados em bloco branco */}
        <View style={styles.movementsBlock}>
          <View style={styles.movementsHeader}>
            <TouchableOpacity onPress={() => setShowCalendar(true)}>
              <MaterialCommunityIcons name="calendar-month-outline" size={28} color="#171717" />
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>Últimas movimentações</Text>
          </View>
          {/* Modal de calendário */}
          <Modal visible={showCalendar} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContentCalendar}>
                <Image
                  source={require('../../assets/Logo.png')}
                  style={{ width: 64, height: 64, marginBottom: 8 }}
                  resizeMode="contain"
                />
                <Calendar
                  onDayPress={day => setSelectedDate(day.dateString)}
                  markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: '#6567DD' } } : {}}
                  theme={{
                    todayTextColor: '#6567DD',
                    selectedDayBackgroundColor: '#6567DD',
                    arrowColor: '#6567DD',
                    textMonthFontWeight: 'bold',
                    textMonthFontSize: 18,
                    textDayFontWeight: 'bold',
                    textDayFontSize: 16,
                    textSectionTitleColor: '#888',
                  }}
                  enableSwipeMonths={true}
                />
                <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
                  <Text style={styles.filterButtonText}>Filtrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowCalendar(false)} style={styles.closeModalButton}>
                  <Text style={{ color: '#6567DD', fontWeight: 'bold', fontSize: 16 }}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* Lista de movimentações filtrada */}
          {filteredTransactions.map(item => (
            <View key={item.id} style={[styles.transactionItemShadow, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <View style={[
                  styles.badge,
                  { backgroundColor: item.type === 'income' ? '#00B94A' : '#EF463A', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }
                ]}>
                  {item.type === 'income' ? (
                    <Ionicons name="arrow-up" size={16} color="#FFF" style={{ marginRight: 4 }} />
                  ) : (
                    <Ionicons name="arrow-down" size={16} color="#FFF" style={{ marginRight: 4 }} />
                  )}
                  <Text style={[styles.badgeText, { fontStyle: 'italic' }]}>{item.type === 'income' ? 'receita' : 'despesa'}</Text>
                </View>
                <Text style={[styles.transactionValueBelow, { marginLeft: 12 }]}>R$ {item.amount.toFixed(2)}</Text>
              </View>
              <TouchableOpacity 
                onPress={() => handleDeleteTransaction(item.id)}
                style={{ padding: 4 }}
              >
                <Ionicons name="close-circle" size={24} color="#EF463A" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </Background>
  );
}