import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

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

        if(storageUser){
          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          
          const response = await api.get('/me', {
            headers:{
              'Authorization': `Bearer ${storageUser}`
            }
          });

          setUser(response.data);
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ id: 1, name: nome, email });
    } catch(err){
      alert("Erro ao cadastrar!");
    } finally {
      setLoadingAuth(false);
    }
  }

  async function signIn(email, password){
    setLoadingAuth(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email === "teste@teste.com" && password === "123456") {
        setUser({ id: 1, name: "Usuário Teste", email });
      } else {
        alert("Email ou senha inválidos!");
      }
    } catch (err) {
      alert("Erro ao acessar!");
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

