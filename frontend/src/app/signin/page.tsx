'use client'
import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Wave from "@/components/wave"
import MainButton from "@/components/buttons/mainButton"
import Input from "@/components/input"
import Tabs from "@/components/tabs"
import { AuthContext } from "../Context/authContext"


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

    const { signIn, companySignIn, errorResponse } = useContext(AuthContext)
    console.log(errorResponse)

    const [ state, setState ] = useState('user')

    const userSignin = (data) => {
        console.log('user',data)
        signIn(data)
    }

    const companySignin = (data) => {
        console.log('company', data)
        companySignIn(data)
    }

    const handleClick = (data) => {
        if(data === 'user') {
            setState('user')
        } else if(data === 'company') {
            setState('company')
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
                        <Tabs 
                            userFunc={() => handleClick('user')} 
                            companyFunc={() => handleClick('company')} 
                            userClassName={state === 'user' ? 'selected' : ''}
                            companyClassName={state === 'company' ? 'selected' : ''}
                        />
                        <Form onSubmit={handleSubmit(state === 'user' ? userSignin : companySignin)}>
                            <Input type="text" label="E-mail" register={register('email')}/>
                            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                            {errorResponse === 'Usuário não encontrado' || 'Empresa não encontrada' && <ErrorMsg>{errorResponse}</ErrorMsg>}
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