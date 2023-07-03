'use client'
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import axios from "axios"
import Wave from "@/components/wave"
import Input from "@/components/input"
import MainButton from "@/components/buttons/mainButton"
import { baseApiUrl } from "../page"

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, BoxLink, Form, ErrorMsg } from './style'

const createUserFormSchema = z.object({
    name: z.string().nonempty('Campo obrigatório'),
    email: z.string().nonempty('Campo obrigatório').email('Formato de E-mail inválido'),
    password: z.string().nonempty('Campo obrigatório').min(4, 'No mínimo 4 caracteres'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>

export default function SignUp() {

    const [ errorResponse, setErrorResponse ] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema), 
        mode: 'onChange'
    })

    const  createUser = async (data) => {
        try {
            const response = await axios.post(`${baseApiUrl}/users`, data)
        } catch(error) {
            console.error(error)
            setErrorResponse(error.response.data)
        }
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
                            <Input type="text" label="Nome Completo" register={register('name')} />
                            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                            <Input type="email" label="E-mail" register={register('email')} />
                            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                            {errorResponse && <ErrorMsg>{errorResponse}</ErrorMsg>}
                            <Input type="password" label="Senha" register={register('password')} />
                            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                            <MainButton margin="20px 0px" width="75%" type="submit">Cadastrar</MainButton>
                        </Form>
                        <BoxLink href='/signin'>Fazer login</BoxLink>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}

