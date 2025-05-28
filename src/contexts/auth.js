import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage(){
      try {
        const storageUser = await AsyncStorage.getItem('@finToken');
        const userId = await AsyncStorage.getItem('userId');

        if(storageUser && userId){
          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          setUser({ id: userId, token: storageUser });
        }
      } catch (error) {
        console.log('Erro ao carregar usuário:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadStorage();
  }, []);

  async function signUp(email, password, nome){
    setLoadingAuth(true);

    try{
      const response = await api.post('/users', {
        name: nome,
        email,
        password
      });

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('SignIn');
    } catch(err){
      Alert.alert('Erro', 'Erro ao cadastrar! Verifique os dados e tente novamente.');
    } finally {
      setLoadingAuth(false);
    }
  }

  async function signIn(email, password){
    setLoadingAuth(true);

    try {
      Alert.alert('Debug', 'Tentando fazer login...');
      
      const response = await api.post('/login', {
        email,
        password
      });

      Alert.alert('Debug', `Resposta do servidor: ${JSON.stringify(response.data)}`);

      const { id, name, token } = response.data;

      if (!id || !name || !token) {
        throw new Error('Dados de resposta inválidos');
      }

      await AsyncStorage.setItem('@finToken', token);
      await AsyncStorage.setItem('userId', id.toString());

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      setUser({ id, name, token });
      
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } catch (err) {
      console.error('Erro no login:', err);
      let errorMessage = 'Erro ao fazer login';
      
      if (err.response) {
        errorMessage = `Erro ${err.response.status}: ${err.response.data?.message || 'Erro desconhecido'}`;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      Alert.alert('Erro', errorMessage);
    } finally {
      setLoadingAuth(false);
    }
  }

  async function signOut(){
    try {
      await AsyncStorage.clear();
      setUser(null);
    } catch (error) {
      console.log('Erro ao fazer logout:', error);
    }
  }

  return(
    <AuthContext.Provider value={{ 
      signed: !!user, 
      user, 
      signUp, 
      signIn, 
      signOut, 
      loadingAuth, 
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

