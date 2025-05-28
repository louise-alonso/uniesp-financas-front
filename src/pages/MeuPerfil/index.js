import React, {useContext} from 'react';
import {AuthContext} from "../../contexts/auth";
import {Background} from "../Login/styles";
import Header from "../../components/Header";

export default function MeuPerfil(){

    return(
        <Background>
            <Header title="Meu Perfil"/>
        </Background>
    )
}