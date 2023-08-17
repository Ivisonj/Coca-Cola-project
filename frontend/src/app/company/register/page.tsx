'use client'
import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import { AuthContext } from "@/src/Context/authContext"
import Header from "@/components/header"
import Wave from "@/components/wave"
import Input from "@/components/input"
import MainButton from "@/components/buttons/PrimaryButton"
import { api } from "@/services/api"

import { Container, FormBox, Title, Form, ErrorMsg } from '../../../../styles/register.module'

const productFormSchema = z.object({
    name: z.string().nonempty('Campo obrigatório'),
    price: z.string().nonempty('Campo obrigatório'),
})

type productFormData = z.infer<typeof productFormSchema>

export default function RegisterProduct() {

    const { user } = useContext(AuthContext)
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<productFormData>({
        resolver: zodResolver(productFormSchema), 
        mode: 'onChange',
    })

    const createProduct = async (data) => {
        const companyId = user?.id
        
        const productData = {
            name: data.name, 
            price: data.price, 
            companyId: companyId,
            imageUrl: 'http://localhost:8080/image/e541c1ddc517fc2cc68aa0cfc6e68549-COCA-DESENHO.png'
        }
        
        try {
           const response = await api.post('/products', productData)
           router.push('/company')
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            <Header />
            <Container>
                <FormBox>
                    <Title>Registrar Produto</Title>
                    <Form onSubmit={handleSubmit(createProduct)}>
                            <Input type="text" label="Nome do Produto" register={register('name')}/>
                            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                            <Input type="text" label="Preço do Produto" register={register('price')} step={'0.01'}/>
                            {errors.price && <ErrorMsg>{errors.price.message}</ErrorMsg>}
                            <MainButton goTo="/company-dashboard" type="submit" margin="30px 0px 0px 0px">
                                finalizar
                            </MainButton>
                    </Form>
                </FormBox>
            </Container>
            <Wave type="infinite" />
        </>
        
    )
}
