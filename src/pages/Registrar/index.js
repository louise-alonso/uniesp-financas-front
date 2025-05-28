import {Background} from "../Login/styles";
import Header from "../../components/Header";
import {
    Img, SubmitText, SubmitButton, Input, AreaInput,
    ButtonImage
} from "./style"
import { Button } from "react-native-web";

export default function Registrar(){

    return(
        <Background>
            <Header title="Registrando"/>

            <AreaInput><Input placeholder="Nome" /></AreaInput>
            <AreaInput><Input placeholder="Valor desejado" /></AreaInput>

            <ButtonImage>
                <Img source={require('../../assets/ReceitaWHITE.png')}/>
            </ButtonImage>
            <ButtonImage>
                <Img source={require('../../assets/DespesaGRAY.png')}/>
            </ButtonImage>

            <SubmitButton>
                <SubmitText>Registrar</SubmitText>
            </SubmitButton>
        </Background>
    )
}