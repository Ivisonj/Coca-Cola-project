'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsFillPersonFill } from 'react-icons/bs'

import Header from "@/components/header"
import InforInput from '@/components/input/inforInput'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'

import { Container, LeftColumn, RightColumn, Avatar, Text, Form, ButtonsContainer, } from '../../../../styles/profile.module'

export default function Profile({params}: { params: {profile: string} }) {

    const [ isEditing, setIsEditing ] = useState(true)
    const { register, handleSubmit } = useForm()
  
    const toggleEdite = () => {
        setIsEditing(!isEditing)
    }

    const userEdite = (data) => {
        console.log(data)
    }

    return (
        <>
        <Container>
            <Header />
            <LeftColumn>
                <Avatar>
                    <BsFillPersonFill style={{ fontSize: '17rem' }}/>
                </Avatar>
            </LeftColumn>
            <RightColumn>
                <Text>Minhas informações:</Text>
                <Form onSubmit={handleSubmit(userEdite)}>
                    <InforInput type='text' label='Nome' disabled={isEditing} register={register('name')}/>
                    <InforInput type='text' label='E-mail'  disabled={isEditing} register={register('email')}/>
                    <InforInput type='text' label='Endereço'  disabled={isEditing} register={register('address')}/>
                    <InforInput type='file' label='Avatar' disabled={isEditing} register={register('file')}/>
                    <ButtonsContainer>
                        <PrimaryButton type='submit' bgColor='MediumSeaGreen' margin='0px 5px'>Salvar</PrimaryButton>
                        <SecondaryButton margin='0px 50px 0px 5px' onClick={toggleEdite} bgColor='DarkGray'>Editar</SecondaryButton>
                    </ButtonsContainer>
                </Form>
            </RightColumn>
        </Container>
        </>
    )
}