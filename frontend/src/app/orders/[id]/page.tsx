'use client'
import { useRouter } from "next/navigation"
import { parseCookies } from "nookies"

import Header from "@/components/header"
import Wave from "@/components/wave"
import Table from "@/components/table"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import OrderCard from "@/components/orderCard"
import { api } from "@/services/api"

import { Container, Content, Title, ButtonContainer, UserContent } from '../../../../styles/orders.module'

export default function Orders({params}: {params: {id: string}}) {
    const router = useRouter()
    const { 'account': accountType } = parseCookies()

    const handleClick = () => {
        router.push('/company')
    }
    
    return (
        <>
            <Header />
            {accountType === 'company' ? (
                <>
                <Container>
                    <Content>
                        <Title>Pedidos</Title>
                        <Table />
                        <ButtonContainer>
                            <PrimaryButton onClick={handleClick} margin="0px 70px">Fechar</PrimaryButton>
                        </ButtonContainer>
                    </Content>
                </Container>
                </>

            ) : (
                <UserContent>
                    <Title>Pedidos</Title>
                    <OrderCard />
                </UserContent>
            )}
        </>
    )
}