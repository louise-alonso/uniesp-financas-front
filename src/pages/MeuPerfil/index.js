import React, {useContext} from 'react';
import {AuthContext} from "../../contexts/auth";
import {Background} from "../Login/styles";
import { useNavigation } from '@react-navigation/native';

export default function MeuPerfil(){
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();

    return(
        <Background style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 60, background: '#FFF'}}>
            <h2 style={{fontWeight: 'bold', fontSize: 20, marginBottom: 24, marginTop: 0, textAlign: 'center', fontFamily: 'system-ui, sans-serif'}}>Bem vindo de volta</h2>
            <button
                style={{
                    background: '#3b3dbf',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 12,
                    padding: '12px 0',
                    width: 260,
                    fontSize: 18,
                    marginBottom: 12,
                    cursor: 'pointer',
                    fontFamily: 'system-ui, sans-serif'
                }}
                onClick={() => navigation.navigate('Registrando')}
            >
                Registrar gastos
            </button>
            <button
                style={{
                    background: 'transparent',
                    color: '#d32f2f',
                    border: '2px solid #d32f2f',
                    borderRadius: 12,
                    padding: '12px 0',
                    width: 260,
                    fontSize: 18,
                    cursor: 'pointer',
                    fontFamily: 'system-ui, sans-serif'
                }}
                onClick={signOut}
            >
                Sair
            </button>
        </Background>
    )
}