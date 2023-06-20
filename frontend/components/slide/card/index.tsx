import React from "react";

import { Container, ProductName } from './style'

interface CardProps {
    name: string
    img?: string
}

export default function Card({ name, img }: CardProps) {
    return (
        <>
            <Container>
                <ProductName>{name}</ProductName>
            </Container>
        </>
    )
}