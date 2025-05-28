import styled from 'styled-components/native';

// Botão de Receita/Despesa

export const Img = styled.Image`
    margin-bottom: 20px; /* Espaço abaixo da logo */
`;

// Container centralizado e responsivo
export const Container = styled.View`
  width: 100%;
  margin-top: 16px; /* Reduzido para deixar mais para cima */
  background: transparent;
  align-items: center;
  justify-content: center;
  padding: 24px 0 32px 0;
  border-radius: 12px;
`;

// Linha dos botões Receita/Despesa
export const ButtonRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 24px; /* Espaço entre botões e borda lateral igual ao Registrar */
`;

// Botão Receita/Despesa com destaque de seleção
export const ButtonImage = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0 4px;
  border-radius: 4px;
  border: 2px solid ${props => props.selected ? '#3b3dbf' : '#DDD'};
  background-color: ${props => props.selected ? '#EEE' : '#FFF'};
  flex-direction: row;
`;

export const ButtonLabel = styled.Text`
  font-size: 16px;
  color: #222;
  font-weight: 600;
`;

// Inputs

export const AreaInput = styled.View`
  width: 100%;
  margin-bottom: 15px;
  padding: 0 24px; /* Espaço entre input e borda lateral igual ao Registrar */
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    width: 100%;
    font-size: 17px;
    padding: 10px;
    border-radius: 4px;
    color: #A0A0A0;
    border: 1.5px solid #DDD;
`;

// Submit

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: auto;
    min-width: 120px;
    height: 45px;
    border-radius: 4px;
    background-color: #00B94A;
    margin: 10px 24px 0 24px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
`;