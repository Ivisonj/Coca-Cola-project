'use client'
import React, { useContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'

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
  ProductImage, 
  ProductName, 
  Text } from "./style"

import Amount from '../amount'
import { useAmountStore } from '@/stores/useStore'
import PrimaryButton from '../buttons/PrimaryButton'
import { BsFillCartFill } from 'react-icons/bs'
import { IoMdArrowBack } from 'react-icons/io'
import { useStore } from '@/stores/useStore'
import { useCurrentProduct } from '@/stores/useStore'
import { api } from '@/services/api'

const defaultImage = '/images/coca-cola-desenho.png'

export default function Market() {

  const [isVisible, setIsVisible] = useState(false);
  const { buttonState, toggleButton } = useStore()
  const { number } = useAmountStore()
  const { currentProduct } = useCurrentProduct()
  const { 'id': userId } = parseCookies()

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

  const sendOrder = async () => {
    
    const productData = {
      productName: currentProduct?.name,
      price: currentProduct?.price,
      amount: number, 
      companyId: currentProduct?.companyId,
      userId: userId
    }

    try {
      const response = await api.post('/orders', productData)
    } catch(erro) {
      console.error(erro)
    }
  }

  let totalPrice = number * currentProduct?.price
  const productPrice = currentProduct?.price

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
            <ProductImage src={currentProduct ?  (currentProduct?.imageUrl === null ? defaultImage : 
              `http://localhost:8080/image/${currentProduct?.imageUrl}`) : defaultImage} alt={currentProduct?.name}
            />
            <ProductName>{currentProduct?.name}</ProductName>
            <Text>{`R$${productPrice}`}</Text>
            <Amount type='firtsType'/>
          </ProductDetail>
          <PurchaseConfirmation className={!isVisible ? 'donShowDisplay' : null}>
            <Text style={{ color: "#000"}}>Total</Text>
            <Text style={{ color: "#000"}}>{`R$${totalPrice.toFixed(2)}`}</Text>
            <PrimaryButton onClick={sendOrder}>Finalizar pedido</PrimaryButton>
          </PurchaseConfirmation>
        </Container>
      </MarketBackground>
    </>
  )
}
