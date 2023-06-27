import React from "react"

import { Container, ImageContainer, InforContainer, ProductName, Price, LogoImage } from './style'

interface VerticalCardProps {
    name: string
    price: number
    image: string
}

export default function HorizontalCard({ name, price, image }: VerticalCardProps) {
    return (
        <Container>
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


