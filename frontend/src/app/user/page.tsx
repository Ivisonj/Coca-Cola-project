'use client'
import React, { useContext, useEffect, useState } from "react"

import Header from "@/components/header"
import VerticalCard from "@/components/verticalCard"
import { Container, TitleContainer, Title, CardContainer } from '../../../styles/user.module'
import { AuthContext } from "../../Context/authContext"
import { api } from '../../../services/api'

const defaultProfileImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU'

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
                        imageLink={item.imageUrl === null ? defaultProfileImage : `http://localhost:8080/image/${item.imageUrl}`}/>
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}
