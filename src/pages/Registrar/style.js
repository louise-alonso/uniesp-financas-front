import styled from 'styled-components/native';

// Botão de Receita/Despesa

export const Img = styled.Image`
    margin-bottom: 25px; /* Espaço abaixo da logo */
`;

export const ButtonImage = styled.TouchableOpacity`
    width: 50%;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

`;

// Inputs

export const AreaInput = styled.View`
  flex-direction: row; /* Alinha os itens em linha */
`;

export const Input = styled.TextInput`
    background-color: #FFF; /* Fundo branco para o input */
    width: 90%; /* Largura do input */
    font-size: 17px; /* Tamanho da fonte */
    padding: 10px; /* Espaçamento interno */
    border-radius: 8px; /* Bordas arredondadas */
    color: #A0A0A0; /* Cor do texto */
    margin-bottom: 15px; /* Espaço abaixo do input */
`;

// Submit

export const SubmitText = styled.Text`
  font-size: 20px; /* Tamanho da fonte */
  color: #FFF; /* Cor do texto (branca) */
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%; /* Largura do botão */
    height: 45px; /* Altura do botão */
    border-radius: 8px; /* Bordas arredondadas */
    background-color: #00B94A; /* Cor de fundo do botão */
    margin-top: 10px; /* Espaço acima do botão */
    align-items: center; /* Centraliza texto horizontalmente */
    justify-content: center; /* Centraliza texto verticalmente */
`;