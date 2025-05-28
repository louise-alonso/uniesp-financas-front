import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    timeout: 10000,
})

// Interceptor para adicionar o token de autenticação
api.interceptors.request.use(async (request) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    console.log("API Request:", {
        url: `${request.baseURL}${request.url}`,
        method: request.method,
        headers: request.headers
    });
    return request;
});

api.interceptors.response.use(
    response => {
        console.log("API Response:", {
            status: response.status,
            data: response.data
        });
        return response;
    },
    error => {
        console.error("API Error:", {
            message: error.message,
            url: error.config?.url,
            status: error.response?.status,
            data: error.response?.data
        });
        return Promise.reject(error);
    }
);

export default api;

export const deleteTransaction = async (itemId) => {
  try {
    console.log("API Debug: Iniciando processo de deleção");
    
    const userId = await AsyncStorage.getItem('userId');
    console.log("API Debug: ID do usuário obtido:", userId);
    
    if (!userId) {
      throw new Error('ID do usuário não encontrado no AsyncStorage');
    }
    
    // Convert itemId to string
    const itemIdString = String(itemId);
    console.log("API Debug: Enviando requisição DELETE para /receives/delete com item_id:", itemIdString);
    
    const response = await api.delete(`/receives/delete?item_id=${itemIdString}`);
    
    console.log("API Debug: Resposta recebida:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.message, error.response ? {
      status: error.response.status,
      data: error.response.data
    } : '');
    throw error;
  }
};