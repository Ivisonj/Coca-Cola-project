import React from "react"

import { Container, ImageContainer, InforContainer, CompanyName, CompanyAddress, LogoImage } from './style'

interface VerticalCardProps {
    name: string
    address: string
    imageLink: string
    onClick: () => void
}

export default function VerticalCard({ name, address, imageLink, onClick }: VerticalCardProps) {
    return (
        <Container onClick={onClick}>
            <ImageContainer>
                <LogoImage src={imageLink} alt={name}/>
            </ImageContainer>
            <InforContainer>
                <CompanyName>{name}</CompanyName>
                <CompanyAddress>{address}</CompanyAddress>
            </InforContainer>
        </Container>
    )
}


