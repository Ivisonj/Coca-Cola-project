'use client'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Container, LeftColumn, RightColumn, ImageContainer, Text, Form, ButtonsContainer } from '../../../../styles/product.module'

import Header from '@/components/header'
import InforInput from '@/components/input/inforInput'
import { api } from '@/services/api'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import Alert from '@/components/alert'

type ResponseDataTypes = {
    id: number
    name: string
    price: number
    imageUrl: string
    companyId: number
}

export default function Product({ params }: { params: { productId: string } }) {

    const router = useRouter()
    const [responseData, setResponseData] = useState<ResponseDataTypes>({})
    const [isAlertVisible, setIsAlertVisible] = useState(false)
    const [isEditing, setIsEditing] = useState(true)
    const { register, handleSubmit } = useForm()

    const toggleEdite = () => {
        setIsEditing(!isEditing)
    }

    const callAlert = () => {
        setIsAlertVisible(!isAlertVisible)
    }

    useEffect(() => {
        async function productData() {
            try {
                const response = await api.get(`/products/${params.productId}`)
                setResponseData(response.data)
            } catch(error) {
                console.error(error)
            }
        }
        productData()
    }, []) 

    const deleteProduct = async () => {
        try {
            const response = await api.delete(`/products/${params.productId}`)
            router.push('/company')
        } catch(msg) {
            console.error(msg)
        }
    }

    const editeProduct = async (data: ResponseDataTypes) => {
        const formData = new FormData()

        formData.append('file', data.file[0])

        const fileResponse = await api.post('/upload', formData)
        const fileName = fileResponse.data

        const productForm = {
            name: data.name === undefined ? responseData?.name : data.name, 
            price: data.price === undefined ? responseData?.price : data.price,
            imageUrl: `http://localhost:8080/image/${fileName}`,
        }

        const putform = await api.put(`/products/${params.productId}`, productForm)

        router.push('/company')
    }

    return (
        <Container>
            <Alert
                confirmButton={deleteProduct}
                cancelButton={callAlert} 
                display={isAlertVisible ? 'flex' : 'none'} 
            />
            <Header />
            <LeftColumn>
                <ImageContainer src={responseData?.imageUrl} alt={responseData?.name}/>
            </LeftColumn>
            <RightColumn>
                <Text>Dados do produto:</Text>
                <Form onSubmit={handleSubmit(editeProduct)}>
                    <InforInput value={responseData?.name} type='text' label='Nome do produto' disabled={isEditing} register={register('name')}/>
                    <InforInput value={responseData?.price} type='text' label='Preço'  disabled={isEditing} register={register('price')}/>
                    <InforInput type='file' label='Imagem' disabled={isEditing} register={register('file')}/>
                    <ButtonsContainer>
                        <PrimaryButton type='submit' bgColor='MediumSeaGreen' margin='0px 5px'>Salvar</PrimaryButton>
                        <SecondaryButton margin='0px 5px' onClick={toggleEdite} bgColor='DarkGray'>Editar</SecondaryButton>
                        <SecondaryButton margin='0px 30px 0px 5px' onClick={callAlert} bgColor='red'>Excluir</SecondaryButton>
                    </ButtonsContainer>
                </Form>
            </RightColumn>
        </Container>
    ) 
}