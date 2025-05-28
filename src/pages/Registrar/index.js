import { useState } from "react";
import { Background } from "../Login/styles";
import Header from "../../components/Header";
import {
    SubmitText, SubmitButton, Input, AreaInput,
    ButtonRow, Container, ButtonLabel, ButtonImage
} from "./style";
import { mockDashboardData } from '../../mocks/data';
import { useNavigation } from '@react-navigation/native';

export default function Registrar() {
    const [tipo, setTipo] = useState('receita');
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const navigation = useNavigation();

    function handleRegistrar() {
        if (!nome || !valor) return alert('Preencha todos os campos!');
        const novoRegistro = {
            id: Date.now().toString(),
            description: nome,
            amount: parseFloat(valor),
            type: tipo === 'receita' ? 'income' : 'expense',
            date: new Date().toISOString().slice(0, 10)
        };
        mockDashboardData.recentTransactions.unshift(novoRegistro);
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    }

    return (
        <Background>
            <Container>
                <Header title="Registrar" />
                
                <AreaInput>
                    <Input placeholder="Nome" value={nome} onChangeText={setNome} />
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Valor desejado" value={valor} onChangeText={setValor} keyboardType="numeric" />
                </AreaInput>
                <ButtonRow>
                    <ButtonImage
                        selected={tipo === 'receita'}
                        onPress={() => setTipo('receita')}
                    >
                        <span style={{fontSize: 18, marginRight: 6}}>↑</span>
                        <ButtonLabel selected={tipo === 'receita'}>Receita</ButtonLabel>
                    </ButtonImage>
                    <ButtonImage
                        selected={tipo === 'despesa'}
                        onPress={() => setTipo('despesa')}
                    >
                        <span style={{fontSize: 18, marginRight: 6}}>↓</span>
                        <ButtonLabel selected={tipo === 'despesa'}>Despesa</ButtonLabel>
                    </ButtonImage>
                </ButtonRow>
                <SubmitButton onPress={handleRegistrar}>
                    <SubmitText>Registrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    );
}