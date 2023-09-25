'use client'
import React, { useEffect, useContext, useState } from "react"
import { useRouter } from "next/navigation"

import Header from "@/components/header"
import MainButton from "@/components/buttons/PrimaryButton"
import HorizontalCard from "@/components/horizontalCard"

import { Container, Content, ButtonContainer, TitleContainer, Title, CardContainer } from '../../../styles/company.module'
import { api } from "@/services/api"
import { AuthContext } from "@/src/Context/authContext"

type ResponseDataTypes = {
    id: number
    name: string
    price: number
    imageUrl: string
    companyId: number
}

export default function Company() {
    
    const router = useRouter()
    const { user } = useContext(AuthContext)
    const [responseData, setResponseData] = useState<ResponseDataTypes[]>([])
    console.log(responseData)

    useEffect(() => {
        async function productsData() {
            try {
                const response = await api.get(`/products/parentId/${user?.id}`)
                setResponseData(response.data)
            } catch(error) {
                console.error(error)
            }
        }
        productsData()
    }, [user]) 

    const handleClick = () => {
        router.push('/company/register')
    }

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <TitleContainer>
                        <Title>Produtos</Title>
                    </TitleContainer>
                    <ButtonContainer>
                        <MainButton onClick={handleClick}>novo produto</MainButton>
                    </ButtonContainer>
                    <CardContainer>
                        {responseData?.map((item) =>(
                            <HorizontalCard 
                                key={item.id} 
                                id={item.id}
                                name={item.name}
                                price={item.price} 
                                image={item.imageUrl}
                            />
                        ))}
                    </CardContainer>
                </Content>
            </Container>
        </>
    )
}

