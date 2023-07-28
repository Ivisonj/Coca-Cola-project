'use client'
import React, { useContext, useEffect, useState } from "react"

import Header from "@/components/header"
import VerticalCard from "@/components/verticalCard"
import { Container, TitleContainer, Title, CardContainer } from '../../../styles/user.module'
import { AuthContext } from "../../Context/authContext"
import { api } from '../../../services/api'

export default function User() {

    // const response = await fetch('http://localhost:8080/companies')
    // const responseData = await response.json()
    // console.log(JSON.stringify(responseData))
    
    const { user } = useContext(AuthContext)
    const [responseData, setResponseData] = useState()
    console.log(responseData)

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
                        imageLink={item.imageLink}/>
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}
