'use client'
import React from "react"
import Link from "next/link"

import { Container, ImageContainer, InforContainer, CompanyName, CompanyAddress, LogoImage } from './style'

interface VerticalCardProps {
    name: string
    address: string
    imageLink: string
    id: string
}

export default function VerticalCard(props: VerticalCardProps) {
    return (
        <Link href={`/user/${props.id}`} style={{ textDecoration: 'none' }}>
            <Container>
                <ImageContainer>
                    <LogoImage src={props.imageLink} alt={props.name}/>
                </ImageContainer>
                <InforContainer>
                    <CompanyName>{props.name}</CompanyName>
                    <CompanyAddress>{props.address}</CompanyAddress>
                </InforContainer>
            </Container>
        </Link>    
    )
}


