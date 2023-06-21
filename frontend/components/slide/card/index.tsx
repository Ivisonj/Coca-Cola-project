import React, { useContext } from "react";
import { CarouselContext } from '../carousel/index'

import { CardContainer, ProductName, ProductImage } from './style'

interface CardProps {
    name?: string
    img?: string
}

export default function Card({ name, img }: CardProps) {
    const { currentActive, index } = useContext(CarouselContext)

    return (
        <>
            <CardContainer>
                <ProductImage src={img} alt={name} increaseImg={index === currentActive ? 1 : 0} />
            </CardContainer>
        </>
    )
}




