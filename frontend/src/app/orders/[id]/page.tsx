'use client'
import { useRouter } from "next/navigation"

import Header from "@/components/header"
import Wave from "@/components/wave"
import Table from "@/components/table"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { api } from "@/services/api"

import { Container, TableContainer, Title, ButtonContainer } from '../../../../styles/orders.module'

export default function Orders({params}: {params: {id: string}}) {
    const router = useRouter()

    const handleClick = () => {
        router.push('/company')
    }
    
    return (
        <>
            <Header />
            <Container>
                <TableContainer>
                    <Title>pedidos</Title>
                    <Table />
                    <ButtonContainer>
                        <PrimaryButton onClick={handleClick} margin="0px 70px">Fechar</PrimaryButton>
                    </ButtonContainer>
                </TableContainer>
            </Container>
            <Wave type="infinite" />
        </>
    )
}