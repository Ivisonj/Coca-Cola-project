'use client'
import React, { useContext, useEffect } from "react"
import { parseCookies } from 'nookies'

import Header from "@/components/header"
import VerticalCard from "@/components/verticalCard"
import { Container, TitleContainer, Title, CardContainer } from './style'
import { AuthContext } from "../Context/authContext"
import { api } from '../services/api'
import { useRouter } from 'next/navigation'
import axios from "axios"
import { baseApiUrl } from "../page"

const companyInformation = [
    {
        name: 'Mini-Lanche',
        address: 'Av. central, N°323,Vermelhos, Lagoa Grande-PE',
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaph4jTN-NDrJnEG6mhNpx9jYuLevksTyNrw&usqp=CAU'
    },
]

export default function Dashboard() {
    const { user } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        async function userData() {
            try {
                const response = await api.get('/companies')
                console.log(response)
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
                  <Title>{user?.name}</Title>
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
