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
import { useAddProductButton } from '@/stores/useStore'
import { useCurrentProduct } from '@/stores/useStore'
import { api } from '@/services/api'

const defaultImage = '/images/coca-cola-desenho.png'

export default function Market() {

  const [isVisible, setIsVisible] = useState(false);
  const { addProductButtonState, setAddProductButtonState } = useAddProductButton()
  const { currentProduct } = useCurrentProduct()
  const [ additionalData, setAdditionalData ] = useState({})
  const { number } = useAmountStore()
  const { 'id': userId } = parseCookies()
  // console.log('fora do useEffect', additionalData)

  useEffect(() => {
      async function getAdditionalData() { 
        try {
          const getCompanyName = await api.get(`/companies/${currentProduct?.companyId}`)
          
          const getUserName = await api.get(`/users/${userId}`)
          
          const allAdditionalData = {
            companyName: getCompanyName.data[0].name,
            userName: getUserName.data.name            
          }
         
          setAdditionalData(allAdditionalData)

        } catch (erro) {
          console.error(erro)
        }
      }
      getAdditionalData()
  }, [])

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  const comeBack = () => {
    setIsVisible(!isVisible)
    setAddProductButtonState(false)
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
      companyName: additionalData?.companyName,
      companyId: currentProduct?.companyId,
      userName: additionalData?.userName,
      userId: userId,
      imageUrl: currentProduct?.imageUrl,
    }

    // console.log(productData)
    try {
      const response = await api.post('/orders', productData)

      setIsVisible(false)
      setAddProductButtonState(false)

    } catch(erro) {
      console.error(erro)
    }
  }

  let totalPrice = number * currentProduct?.price
  const productPrice = currentProduct?.price

  return (
    <>
      <MarketBackground className={addProductButtonState ? 'showBackground' : isVisible ? 'showBackground' : null}>
        <Container  className={addProductButtonState ? 'expanded' : isVisible ? 'expanded' : null} >
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
                {addProductButtonState ? (
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
