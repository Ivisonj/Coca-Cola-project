import React, { useContext, useState } from 'react';
import { Container, Icon, ProductDetail, PurchaseConfirmation, Product, ProductName, Text } from "./style"
import Amount from '../amount';
import MarketButton from '../buttons/marketButton';
import { BsFillCartFill } from 'react-icons/bs'
import { useStore } from '@/stores/useStore';

export default function Market() {
  const [isVisible, setIsVisible] = useState(false);
  const { buttonState } = useStore()

  console.log('isVisible', isVisible, 'buttonState', buttonState)

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Container  className={buttonState ? 'expanded' : isVisible ? 'expanded' : null} >
        <Icon onClick={handleClick}>
          <BsFillCartFill style={{ width: '25px', height: '25px', color: "#fff" }}/>
        </Icon>
        <ProductDetail className={!isVisible ? 'donShowDisplay' : null}>
          <Product />
          <ProductName>Nome do Produto</ProductName>
          <Text>R$10,00</Text>
          <Amount type='firtsType'/>
        </ProductDetail>
        <PurchaseConfirmation className={!isVisible ? 'donShowDisplay' : null}>
          <Text style={{ color: "#000"}}>Total</Text>
          <Text style={{ color: "#000"}}>R$10,00</Text>
          <MarketButton type='primary'>Finalizar Pedido</MarketButton>
        </PurchaseConfirmation>
      </Container>
    </>
  );
}
