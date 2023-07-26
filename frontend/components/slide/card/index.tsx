'use client'
import React, { useContext } from "react";
import { CarouselContext } from '../carousel/index'

import { CardContainer, ProductImage, ProductPrice } from './style'

interface CardProps {
    img: string
    name: string
    price: number
}

export default function Card({ img, name, price }: CardProps) {
    const { currentActive, index } = useContext(CarouselContext)

    return (
        <>
            <CardContainer>
                <ProductImage src={img} alt={name} increaseImg={index === currentActive ? 1 : 0} />
                <ProductPrice increaseText={index === currentActive ? true : false}>{`R$ ${price.toFixed(2).replace('.', ',')}`}</ProductPrice>
            </CardContainer>
        </>
    )
}




