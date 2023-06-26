'use client'
import React from "react"
import Wave from "@/components/wave"
import Input from "@/components/input"
import MainButton from "@/components/buttons/mainButton"

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, BoxLink } from './style'

export default function SignUp() {
    return (
        <>
            <Container>
                <LeftColumn>
                    <Title>Cadastre-se agora!</Title>
                    <Subtitle>
                        Falta pouco para você começar a sentir o sabor incomparável da Coca-Cola!
                    </Subtitle>
                </LeftColumn>
                <RightColumn>
                    <FormBox>
                        <BoxText>Preencha os campos abaixo:</BoxText>
                        <form>
                            <Input type="text" label="Nome Completo" />
                            <Input type="email" label="E-mail" />
                            <Input type="password" label="Senha" />
                            <Input type="password" label="Confirmar Senha" />
                            <MainButton width='270px' link='/'>Entrar</MainButton>
                        </form>
                        <BoxLink href='/sigin'>Fazer login</BoxLink>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}