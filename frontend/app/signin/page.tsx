'use client'
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import axios from "axios"
import Wave from "@/components/wave"
import MainButton from "@/components/buttons/mainButton"
import Input from "@/components/input"
import { useRouter } from 'next/navigation';
import { baseApiUrl } from "../page"

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, CreateAccount, Form, ErrorMsg } from './style'

const userFormSchema = z.object({
    email: z.string().nonempty('Campo obrigatório').email('Formato de E-mail inválido'),
    password: z.string().nonempty('Campo obrigatório').min(4, 'No mínimo 4 caracteres')
})

type userFormData = z.infer<typeof userFormSchema>

export default function SignIn() {
    const [ errorResponse, setErrorResponse ] = useState()
    const [ token, setToken ] = useState("")
    const router = useRouter()

    axios.interceptors.request.use(
        (config) => {
            config.headers.Authorization = `Bearer ${token}`
            return config
        }, 
        (error) => {
            return Promise.reject(error)
        }
    )

    const { register, handleSubmit, formState: { errors } } = useForm<userFormData>({
        resolver: zodResolver(userFormSchema),
        mode: 'onChange'
    })

    const userData = async (data) => {
        try {
            const response = await axios.post(`${baseApiUrl}/signin`, data)
            setToken(response.data.token)
            if(response.status === 200) {
                router.push('/companies')
            }
        } catch(error) {
            console.error(error)
            setErrorResponse(error.response.data)
        }
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
                            {errorResponse === 'Usuário não encontrado' && <ErrorMsg>{errorResponse}</ErrorMsg>}
                            <Input type="password" label="Senha" register={register('password')}/>
                            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                            {errorResponse === 'E-mail ou Senha inválidos' && <ErrorMsg>{errorResponse}</ErrorMsg>}
                            <MainButton margin="40px 0px 0px 0px" width='75%' type="submit">Entrar</MainButton>
                        </Form>
                        <CreateAccount href='/signup'>Criar uma conta agora</CreateAccount>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}