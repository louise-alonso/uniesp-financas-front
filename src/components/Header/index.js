import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';

export default function Header({ title }){
  // const navigation = useNavigation();

  return(
    <Container>
      {/* Removido o botão de menu */}
      { title && (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  )
}