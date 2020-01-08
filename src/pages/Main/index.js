import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from './styles'

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name='attach-money' size={28} color='#666' />
            <Icon name='visibility-off' size={28} color='#666' />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$:200.550,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferência de R$ 200,00 recebida de William José Dias hoje às 13:58h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  )
}
