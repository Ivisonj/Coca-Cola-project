'use client'
import React from "react"
import { useRouter } from "next/navigation"

import { Container, ImageContainer, InforContainer, CompanyName, CompanyAddress, LogoImage } from './style'

interface VerticalCardProps {
    name: string
    address: string
    imageLink: string
    goTo: string
}

export default function VerticalCard({ name, address, imageLink, goTo }: VerticalCardProps) {
    const router = useRouter()

    const handleClick = () => {
        router.push(goTo)
    }

    return (
        <Container onClick={handleClick}>
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


