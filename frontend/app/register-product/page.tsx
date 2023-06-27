'use client'
import React from "react"
import Header from "@/components/header"
import Wave from "@/components/wave"
import Input from "@/components/input"
import UploadInput from "@/components/input/uploadInput"
import MainButton from "@/components/buttons/mainButton"

import { Container, FormBox, Title } from './style'

export default function RegisterProduct() {
    return (
        <>
            <Header />
            <Container>
                <form>
                    <FormBox>
                        <Title>Registrar Pedido</Title>
                        <Input type="text" label="Nome do Produto"/>
                        <Input type="number" label="Preço do Produto"/>
                        <UploadInput type="file" label="Foto do Produto" />
                        <MainButton link="/register-product">finalizar</MainButton>
                    </FormBox>
                </form>
            </Container>
            <Wave type="infinite" />
        </>
        
    )
}
