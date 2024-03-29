'use client'
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import Wave from "@/components/wave"
import Input from "@/components/input"
import MainButton from "@/components/buttons/PrimaryButton"
import { useRouter } from 'next/navigation'

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, BoxLink, Form, ErrorMsg } from '../../../../styles/signUpCompany.module'
import ComeBack from "@/components/comeback"
import { api } from "@/services/api"

const createCompanyformSchema = z.object({
    name: z.string().nonempty('Campo obrigatório'),
    email: z.string().nonempty('Campo obrigatório').email('Formato de E-mail inválido'),
    password: z.string().nonempty('Campo obrigatório').min(4, 'No mínimo 4 caracteres'),
    address: z.string().nonempty('Campo obrigatório')
})

type createCompanyFormData = z.infer<typeof createCompanyformSchema>  

export default function CompanySignUp() {

    const [ errorResponse, setErrorResponse ] = useState()
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<createCompanyFormData>({
        resolver: zodResolver(createCompanyformSchema),
        mode: 'onChange'
    })

    const  createCompany = async (data) => {

        const companyData = {
            name: data.name,
            email: data.email,
            password: data.password,
            address: data.address,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ879EaSBnE96ff7F5g8BKTrdpWVtLt3ARqcQ&usqp=CAU'
        }

        try {
            const response = await api.post(`/signup/company`, companyData)
            console.log(response)
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
                    <Title>Cadastre a sua empresa!</Title>
                    <Subtitle>
                        Falta pouco para você compartilhar o sabor incomparável da Coca-Cola!
                    </Subtitle>
                </LeftColumn>
                <RightColumn>
                    <FormBox>
                        <BoxText>Preencha os campos abaixo:</BoxText>
                        <Form onSubmit={handleSubmit(createCompany)}>
                            <Input type="text" label="Nome da empresa" register={register('name')}/>
                            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                            <Input type="email" label="E-mail" register={register('email')}/>
                            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                            {errorResponse && <ErrorMsg>{errorResponse}</ErrorMsg>}
                            <Input type="password" label="Senha" register={register('password')}/>
                            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                            <Input type="text" label="Endereço" register={register('address')}/>
                            {errors.address && <ErrorMsg>{errors.address.message}</ErrorMsg>}
                            <MainButton width='75%' type="submit" margin="35px 0px 0px 0px">Cadastrar</MainButton>
                        </Form>
                        <BoxLink href='/signin'>Fazer login</BoxLink>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}