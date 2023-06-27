'use client'
import React from "react"
import Header from "@/components/header"
import VerticalCard from "@/components/verticalCard"

import { Container, TitleContainer, Title, CardContainer } from './style'

const companyInformation = [
    {
        name: 'Mini-Lanche',
        address: 'Av. central, N°323,Vermelhos, Lagoa Grande-PE',
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaph4jTN-NDrJnEG6mhNpx9jYuLevksTyNrw&usqp=CAU'
    },
    {
        name: 'Mini-Lanche',
        address: 'Av. central, N°323,Vermelhos, Lagoa Grande-PE',
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaph4jTN-NDrJnEG6mhNpx9jYuLevksTyNrw&usqp=CAU'
    },
    {
        name: 'Mini-Lanche',
        address: 'Av. central, N°323,Vermelhos, Lagoa Grande-PE',
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaph4jTN-NDrJnEG6mhNpx9jYuLevksTyNrw&usqp=CAU'
    },
    {
        name: 'Mini-Lanche',
        address: 'Av. central, N°323,Vermelhos, Lagoa Grande-PE',
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaph4jTN-NDrJnEG6mhNpx9jYuLevksTyNrw&usqp=CAU'
    },
]

export default function Companies() {
    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                    <Title>Restaurantes Cadastrados</Title>
                </TitleContainer>
                <CardContainer>
                    {companyInformation.map((item, index) => (
                        <VerticalCard key={index} name={item.name} address={item.address} imageLink={item.imageLink}/>
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}