'use client'
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import axios from "axios"
import Wave from "@/components/wave"
import MainButton from "@/components/buttons/mainButton"
import Input from "@/components/input"

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, CreateAccount, Form, ErrorMsg } from './style'

const userFormSchema = z.object({
    email: z.string().nonempty('Campo obrigatório').email('Formato de E-mail inválido'),
    password: z.string().nonempty('Campo obrigatório').min(4, 'No mínimo 4 caracteres')
})

type userFormData = z.infer<typeof userFormSchema>

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<userFormData>({
        resolver: zodResolver(userFormSchema),
        mode: 'onChange'
    })

    const userData = (data) => {
        console.log(data)
    }

    return (
        <>
            <Container>
                <LeftColumn>
                    <Title>Vamos nos conectar?</Title>
                    <Subtitle>
                        Preencha os campos e faça parte da nossa comunidade global de fãs!
                    </Subtitle>
                </LeftColumn>
                <RightColumn>
                    <FormBox>
                        <BoxText>Preencha com seu E-mail e Senha:</BoxText>
                        <Form onSubmit={handleSubmit(userData)}>
                            <Input type="text" label="E-mail" register={register('email')}/>
                            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                            <Input type="password" label="Senha" register={register('password')}/>
                            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                            <MainButton margin="40px 0px 0px 0px" width='270px' type="submit">Entrar</MainButton>
                        </Form>
                        <CreateAccount href='/signup'>Criar uma conta agora</CreateAccount>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}