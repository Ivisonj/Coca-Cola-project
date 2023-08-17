'use client'
import React, { useContext, useEffect, useState } from "react"

import Header from "@/components/header"
import VerticalCard from "@/components/verticalCard"
import { Container, TitleContainer, Title, CardContainer } from '../../../styles/user.module'
import { AuthContext } from "../../Context/authContext"
import { api } from '../../../services/api'

export default function User() {
    
    const { user } = useContext(AuthContext)
    const [responseData, setResponseData] = useState()

    useEffect(() => {
        async function userData() {
            try {
                const response = await api.get('/companies')
                setResponseData(response.data)
            } catch(error) {
                console.error(error)
            }
        }
        userData()
    }, []) 

    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                  <Title>Empresas</Title>
                </TitleContainer>
                <CardContainer>
                    {responseData?.map((item) => (
                        <VerticalCard 
                        key={item.id} 
                        id={item.id}
                        name={item.name} 
                        address={item.address} 
                        imageLink={item.imageUrl}/>
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}
