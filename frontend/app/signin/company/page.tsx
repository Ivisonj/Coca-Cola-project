'use client'
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import axios from "axios"
import Wave from '@/components/wave'
import MainButton from '@/components/buttons/mainButton'
import Input from '@/components/input'

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, CreateAccount, Form, ErrorMsg } from './style'

const companyFormSchema = z.object({
    email: z.string().nonempty('Campo obrigatório').email('Formato de E-mail inválido'),
    password: z.string().nonempty('Campo obrigatório').min(4, 'No mínimo 4 caracteres')
})

type companyFormData = z.infer<typeof companyFormSchema>

export default function CompanySignIn() {

    const { register, handleSubmit, formState: { errors } } = useForm<companyFormData>({
        resolver: zodResolver(companyFormSchema), 
        mode: 'onChange'
    })

    const companyData = (data) => {
        console.log(data)
    }

    return (
        <>
            <Container>
                <LeftColumn>
                    <Title>Vamos conectar pessoas?</Title>
                    <Subtitle>
                        Preencha os campos e nos ajude a espalhar a magia da Coca-cola!
                    </Subtitle>
                </LeftColumn>
                <RightColumn>
                    <FormBox>
                        <BoxText>Preencha com seu E-mail e Senha:</BoxText>
                        <Form onSubmit={handleSubmit(companyData)}>
                            <Input type="text" label="E-mail" register={register('email')}/>
                            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                            <Input type="password" label="Senha" register={register('password')}/>
                            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                            <MainButton margin="40px 0px 0px 0px" width='270px' type="submit">Entrar</MainButton>
                        </Form>
                        <CreateAccount href='/signup/company'>Criar uma conta agora</CreateAccount>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}