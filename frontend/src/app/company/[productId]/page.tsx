'use client'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Header from '@/components/header'
import InforInput from '@/components/input/inforInput'
import { api } from '@/services/api'
import { Container, LeftColumn, RightColumn, ImageContainer, Text, Form, ButtonsContainer } from '../../../../styles/product.module'
import MainButton from '@/components/buttons/mainButton'
import EditeButton from '@/components/buttons/editeButton'

const defaultImage = '/images/coca-1.png'

export default function Product({ params }: { params: { productId: string } }) {

    const [responseData, setResponseData] = useState()
    const [isEditing, setIsEditing] = useState(true)

    const { register, handleSubmit } = useForm()

    const toggleEdite = () => {
        setIsEditing(!isEditing)
    }

    useEffect(() => {
        async function userData() {
            try {
                const response = await api.get(`/products/${params.productId}`)
                setResponseData(response.data[0])
            } catch(error) {
                console.error(error)
            }
        }
        userData()
    }, []) 

    const editeProduct = (data) => {
        console.log(data)
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
                        <MainButton type='submit' bgColor='MediumSeaGreen' margin='0px 5px'>Salvar</MainButton>
                        <EditeButton margin='0px 30px 0px 5px' onClick={toggleEdite}>Editar</EditeButton>
                    </ButtonsContainer>
                        {/* <MainButton type='submit' margin='0px 30px 0px 5px'>Exluir</MainButton> */}
                </Form>
            </RightColumn>
        </Container>
    ) 
}