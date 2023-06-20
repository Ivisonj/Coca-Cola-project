import React from "react";
import Image from "next/image";

import { CardContainer, ProductName } from './style'

interface CardProps {
    name?: string
    img?: string
}

export default function Card({ name, img }: CardProps) {
    return (
        <>
            <CardContainer>
                <ProductName>{name}</ProductName>
                <img width='100%' height='100%' src={img} alt={name} />
            </CardContainer>
        </>
    )
}
