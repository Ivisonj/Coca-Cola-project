'use client'
import React from "react"
import { useRouter } from "next/navigation"

import { Container, ImageContainer, InforContainer, ProductName, Price, LogoImage } from './style'

interface VerticalCardProps {
    name: string
    price: number
    image: string
    goTo: string
}

export default function HorizontalCard({ name, price, image, goTo }: VerticalCardProps) {
    const router = useRouter()

    const handleClick = () => {
        router.push(goTo)
    }
    
    return (
        <Container onClick={handleClick}>
            <ImageContainer>
                <LogoImage src={image} alt={name}/>
            </ImageContainer>
            <InforContainer>
                <ProductName>{name}</ProductName>
                <Price>{`R$ ${price.toFixed(2).replace('.', ',')}`}</Price>
            </InforContainer>
        </Container>
    )
}


