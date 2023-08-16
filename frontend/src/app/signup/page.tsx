'use client'
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Wave from "@/components/wave"
import Input from "@/components/input"
import MainButton from "@/components/buttons/PrimaryButton"
import { useRouter } from 'next/navigation'

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, BoxLink, Form, ErrorMsg } from '../../../styles/signUp.module'
import ComeBack from "@/components/comeback"
import { api } from "@/services/api"

const createUserFormSchema = z.object({
    name: z.string().nonempty('Campo obrigatório'),
    email: z.string().nonempty('Campo obrigatório').email('Formato de E-mail inválido'),
    password: z.string().nonempty('Campo obrigatório').min(4, 'No mínimo 4 caracteres'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>

export default function SignUp() {

    const [ errorResponse, setErrorResponse ] = useState()
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema), 
        mode: 'onChange'
    })

    const  createUser = async (data) => {
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU'
        }

        try {
            const response = await api.post(`/signup`, userData)
            if(response.status === 204) {
                router.push('/signin')
            }
        } catch(error) {
            console.error(error)
            setErrorResponse(error.response.data)
        }
    }
    
    return (
        <>
            <Container>
                <ComeBack comeBackTo="/signin"/>
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
                            <MainButton margin="40px 0px 0px 0px" width="75%" type="submit">Cadastrar</MainButton>
                        </Form>
                        <BoxLink href='/signin'>Fazer login</BoxLink>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}

