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

const defaultImage = 'data:image/jpeg;base64,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'

export default function Product({ params }: { params: { productId: string } }) {

    const [responseData, setResponseData] = useState()
    const [isEditing, setIsEditing] = useState(true)
    const router = useRouter()

    const { register, handleSubmit } = useForm()

    const toggleEdite = () => {
        setIsEditing(!isEditing)
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

    const editeProduct = async (data) => {
        const formData = new FormData()

        formData.append('file', data.file[0])

        const fileResponse = await api.post('/upload', formData)
        const fileName = fileResponse.data.replace('.png', '')
        console.log(fileName)

        const putform = await api.put(`/products/${params.productId}`, {
            name: data.name,
            price: data.price, 
            imageUrl: fileName,
        })

        router.push('/company')
    }

    return (
        <Container>
            <Header />
            <LeftColumn>
                <ImageContainer src={responseData?.imageUrl === null ? defaultImage : `http://localhost:8080/image/${responseData?.imageUrl}`} alt={responseData?.name}/>
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
                        <SecondaryButton margin='0px 30px 0px 5px' onClick={deleteProduct} bgColor='red'>Excluir</SecondaryButton>
                    </ButtonsContainer>
                </Form>
            </RightColumn>
        </Container>
    ) 
}