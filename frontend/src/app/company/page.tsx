'use client'
import React, { useEffect, useContext, useState } from "react"
import { parseCookies } from 'nookies'

import Header from "@/components/header"
import MainButton from "@/components/buttons/PrimaryButton"
import HorizontalCard from "@/components/horizontalCard"

import { Container, ButtonContainer, TitleContainer, Title, CardContainer } from '../../../styles/company.module'
import { api } from "@/services/api"
import { AuthContext } from "@/src/Context/authContext"

const defaultImage = '/images/coca-cola-desenho.png'

export default function Company() {
    
    const { user } = useContext(AuthContext)
    const [responseData, setResponseData] = useState()
    const { 'id': id } = parseCookies()

    useEffect(() => {
        async function productsData() {
            try {
                const response = await api.get(`/products/parentId/${id}`)
                setResponseData(response.data)
            } catch(error) {
                console.error(error)
            }
        }
        productsData()
    }, []) 

    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                    <Title>Produtos</Title>
                </TitleContainer>
                <ButtonContainer>
                    <MainButton goTo="/company/register">novo produto</MainButton>
                </ButtonContainer>
                <CardContainer>
                    {responseData?.map((item) =>(
                        <HorizontalCard 
                            key={item.id} 
                            id={item.id}
                            name={item.name}
                            price={item.price} 
                            image={item.imageUrl === null ? defaultImage : `http://localhost:8080/image/${item.imageUrl}`}
                        />
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}

