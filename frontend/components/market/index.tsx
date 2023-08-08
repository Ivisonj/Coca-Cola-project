'use client'
import React, { useContext, useState } from 'react'

import {
  Container,
  Icons,
  MarketIcon,
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
  const { buttonState } = useStore()
  const { number } = useAmountStore()

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  const IconStyle = {
    width: '25px', 
    height: '25px', 
    color: "#fff"
  }

  return (
    <>
      <Container  className={buttonState ? 'expanded' : isVisible ? 'expanded' : null} >
        <Icons onClick={handleClick} className={isVisible ? 'justify' : null}>
          {isVisible && (
            <IoMdArrowBack style={IconStyle} />
          )}
          <MarketIcon>
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
    </>
  )
}
