'use client'
import React, { useContext, useState } from 'react'

import {
  MarketBackground,
  Container,
  Icons,
  MarketIcon,
  BackIcon,
  IconLeftColumn,
  IconRightColumn,
  AmountProducts, 
  ProductDetail, 
  PurchaseConfirmation, 
  Product, 
  ProductName, 
  Text } from "./style"

import Amount from '../amount'
import { useAmountStore } from '@/stores/useStore'
import MainButton from '../buttons/PrimaryButton'
import { BsFillCartFill } from 'react-icons/bs'
import { IoMdArrowBack } from 'react-icons/io'
import { useStore } from '@/stores/useStore'

export default function Market() {

  const [isVisible, setIsVisible] = useState(false);
  const { buttonState, toggleButton } = useStore()
  const { number } = useAmountStore()

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  const comeBack = () => {
    setIsVisible(!isVisible)
    toggleButton()
  }

  const IconStyle = {
    width: '25px', 
    height: '25px', 
    color: "#fff"
  }

  return (
    <>
      <MarketBackground className={buttonState ? 'showBackground' : isVisible ? 'showBackground' : null}>
        <Container  className={buttonState ? 'expanded' : isVisible ? 'expanded' : null} >
          <Icons className={isVisible ? 'justify' : null}>
            {isVisible && (
              <BackIcon>
                <IoMdArrowBack onClick={comeBack} style={IconStyle} />
              </BackIcon>
            )}
            <MarketIcon onClick={handleClick}>
              <IconLeftColumn>
                <BsFillCartFill style={IconStyle}/> 
              </IconLeftColumn>
              <IconRightColumn>
                {buttonState ? (
                  <AmountProducts>{number}</AmountProducts>
                ) : null}
              </IconRightColumn>
            </MarketIcon>
          </Icons>
          <ProductDetail className={!isVisible ? 'donShowDisplay' : null}>
            <Product />
            <ProductName>Nome do Produto</ProductName>
            <Text>R$10,00</Text>
            <Amount type='firtsType'/>
          </ProductDetail>
          <PurchaseConfirmation className={!isVisible ? 'donShowDisplay' : null}>
            <Text style={{ color: "#000"}}>Total</Text>
            <Text style={{ color: "#000"}}>R$10,00</Text>
            <MainButton link='/' type='primary'>Finalizar Pedido</MainButton>
          </PurchaseConfirmation>
        </Container>
      </MarketBackground>
    </>
  )
}
