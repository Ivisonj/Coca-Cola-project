'use client'
import React from "react"
import Wave from "@/components/wave"
import Input from "@/components/input"
import MainButton from "@/components/buttons/mainButton"

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, BoxLink } from './style'

export default function CompanySignUp() {
    return (
        <>
            <Container>
                <LeftColumn>
                    <Title>Cadastre a sua empresa!</Title>
                    <Subtitle>
                        Falta pouco para você compartilhar o sabor incomparável da Coca-Cola!
                    </Subtitle>
                </LeftColumn>
                <RightColumn>
                    <FormBox>
                        <BoxText>Preencha os campos abaixo:</BoxText>
                        <form>
                            <Input type="text" label="Nome da empresa" />
                            <Input type="email" label="E-mail" />
                            <Input type="password" label="Senha" />
                            <Input type="password" label="Confirmar Senha" />
                            <Input type="text" label="Endereço" />
                            <MainButton width='270px' link='/'>Cadastrar</MainButton>
                        </form>
                        <BoxLink href='/signin'>Fazer login</BoxLink>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}