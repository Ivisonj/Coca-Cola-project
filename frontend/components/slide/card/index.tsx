'use client'
import React, { useContext, useEffect } from "react";

import { CarouselContext } from '../carousel/index'
import { useCurrrentProductIndex } from '../../../stores/useStore'

import { CardContainer, ProductImage, ProductPrice } from './style'

interface CardProps {
    img: string
    name: string
    price: number
}

export default function Card({ img, name, price, onClick }: CardProps) {
    const { currentActive, index } = useContext(CarouselContext)
    const { setCurrentProductIndex } = useCurrrentProductIndex()

    useEffect(() => {
        setCurrentProductIndex(currentActive)
    }, [currentActive, setCurrentProductIndex])

    return (
        <>
            <CardContainer>
                <ProductImage src={img} alt={name} increaseImg={index === currentActive ? 1 : 0} />
                <ProductPrice increaseText={index === currentActive ? true : false}>{`R$ ${price.toFixed(2).replace('.', ',')}`}</ProductPrice>
            </CardContainer>
        </>
    )
}




