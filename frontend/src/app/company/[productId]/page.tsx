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

const defaultImage = '/images/coca-1.png'
// const defaultImage = 'http://localhost:8080/image/f86462e804d9990ff3be8b223a8d3648-601846'


export default function Product({ params }: { params: { productId: string } }) {

    const [responseData, setResponseData] = useState()
    const [isEditing, setIsEditing] = useState(true)
    const router = useRouter()

    const { register, handleSubmit } = useForm()

    const toggleEdite = () => {
        setIsEditing(!isEditing)
    }

    useEffect(() => {
        async function userData() {
            try {
                const response = await api.get(`/products/${params.productId}`)
                setResponseData(response.data)
            } catch(error) {
                console.error(error)
            }
        }
        userData()
    }, []) 

    const editeProduct = (data) => {
        console.log(data)
    }

    const deleteProduct = async () => {
        try {
            const response = await api.delete(`/products/${params.productId}`)
            router.push('/company')
        } catch(msg) {
            console.error(msg)
        }
    }

    return (
        <Container>
            <Header />
            <LeftColumn>
                <ImageContainer src={responseData?.imageUrl === null ? defaultImage : responseData?.imageUrl} alt='teste'/>
            </LeftColumn>
            <RightColumn>
                <Text>Dados do produto:</Text>
                <Form onSubmit={handleSubmit(editeProduct)}>
                    <InforInput value={responseData?.name} type='text' label='Nome do produto' disabled={isEditing} register={register('name')}/>
                    <InforInput value={responseData?.price} type='text' label='Preço'  disabled={isEditing} register={register('price')}/>
                    <InforInput type='file' label='Imagem' disabled={isEditing} register={register('imageUrl')}/>
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