'use client'
import React from "react"
import { useForm } from "react-hook-form"
import Wave from "@/components/wave"
import Input from "@/components/input"
import MainButton from "@/components/buttons/mainButton"

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, BoxLink, Form } from './style'

export default function SignUp() {
    const { register, handleSubmit } = useForm()

    function createUser(data: any) {
        console.log('resultadoooo', data)
    }

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
                        <Form onSubmit={handleSubmit(createUser)}>
                            <Input type="text" label="Nome Completo" register={register('nome')} />
                            <Input type="email" label="E-mail" register={register('email')} />
                            <Input type="password" label="Senha" register={register('senha')} />
                            <Input type="password" label="Confirmar Senha" register={register('confirmarSenha')} />
                            <MainButton width="75%" type="submit">Cadastrar</MainButton>
                        </Form>
                        <BoxLink href='/signin'>Fazer login</BoxLink>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}

