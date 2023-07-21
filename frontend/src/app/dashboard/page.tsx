'use client'
import React, { useContext, useEffect, useState } from "react"
import { parseCookies } from 'nookies'

import Header from "@/components/header"
import VerticalCard from "@/components/verticalCard"
import { Container, TitleContainer, Title, CardContainer } from '../../../styles/dashboardStyle'
import { AuthContext } from "../../Context/authContext"
import { api } from '../../../services/api'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
    const { user } = useContext(AuthContext)
    const [responseData, setResponseData] = useState()
    console.log(responseData)
    const router = useRouter()

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

    const handleClick = () => {
        router.push('/menu-selection')
    }

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
                        onClick={handleClick} 
                        key={item.id} 
                        name={item.name} 
                        address={item.address} 
                        imageLink={item.imageLink}/>
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}

