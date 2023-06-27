'use client'
import React from "react"
import Header from "@/components/header"
import MainButton from "@/components/buttons/mainButton"
import HorizontalCard from "@/components/horizontalCard"

import { Container, ButtonContainer, TitleContainer, Title, CardContainer } from './style'

const registeredProducts = [
    {
        name: 'Coca-Cola',
        price: 10,
        image: '/images/coca-1.png'
    },
    {
        name: 'Coca-Cola',
        price: 10,
        image: '/images/coca-1.png'
    },
    {
        name: 'Coca-Cola',
        price: 10,
        image: '/images/coca-1.png'
    },
    {
        name: 'Coca-Cola',
        price: 10,
        image: '/images/coca-1.png'
    },
]

export default function RegisteredProducts() {
    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                    <Title>Produtos</Title>
                </TitleContainer>
                <ButtonContainer>
                    <MainButton link="/register-product">novo produto</MainButton>
                </ButtonContainer>
                <CardContainer>
                    {registeredProducts.map((item, index) =>(
                        <HorizontalCard key={index} name={item.name} price={item.price} image={item.image}/>
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}