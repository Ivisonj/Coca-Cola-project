'use client'
import React from "react"

import { Container, ImageContainer, InforContainer, ProductName, Price, LogoImage } from './style'
import Link from "next/link"

interface VerticalCardProps {
    name: string
    price: number
    image: string
    id: string
}

export default function HorizontalCard(props: VerticalCardProps) {    
    return (
        <Link  href={`/company/${props.id}`} style={{ textDecoration: 'none' }}>
            <Container>
                <ImageContainer>
                    <LogoImage src={props.image} alt={props.name}/>
                </ImageContainer>
                <InforContainer>
                    <ProductName>{props.name}</ProductName>
                    <Price>{`R$ ${props.price.toFixed(2).replace('.', ',')}`}</Price>
                </InforContainer>
            </Container>
        </Link>
    )
}


