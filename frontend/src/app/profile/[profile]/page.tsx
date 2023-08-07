'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { parseCookies } from 'nookies'
import { BsFillPersonFill } from 'react-icons/bs'

import Header from "@/components/header"
import InforInput from '@/components/input/inforInput'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'

import { Container, LeftColumn, RightColumn, Avatar, Text, Form, ButtonsContainer, } from '../../../../styles/profile.module'
import { api } from '@/services/api'

const defaultProfileImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU'

export default function Profile({params}: { params: {profile: string} }) {

    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const [ isEditing, setIsEditing ] = useState(true)
    const [ responseData, setResponseData] = useState()
    const { 'account': accountType } = parseCookies()

    const toggleEdite = () => {
        setIsEditing(!isEditing)
    }

    useEffect(() => {
       async function getUserData() {
            try {
                if(accountType === 'company') {
                    const companyData = await api.get(`/companies/${params.profile}`)
                    setResponseData(companyData.data[0])
                } else {
                    const userData = await api.get(`/users/${params.profile}`)
                    setResponseData(userData.data)
                }
            } catch(erro) {
                console.log(erro)
            }
        }
        getUserData()
    }, [])

    const userEdite = async (data) => {
        
        const formData = new FormData()
        formData.append('file', data.file[0])

        try {
            const fileResponse = await api.post('/upload', formData)
            const fileName = fileResponse.data

            const userInform = {
                name: data.name === undefined ? responseData?.name : undefined, 
                email: data.email === undefined ? responseData?.email : undefined,
                address: data.address === undefined ? responseData?.address : undefined,
                imageUrl: fileName
            }
            
            if(accountType === 'company') {
                const putCompanyForm = await api.put(`/companies/${params.profile}`, userInform)

                router.push('/company')
            } else {
                const putUserForm = await api.put(`/users/${params.profile}`, userInform)

                router.push('/user')
            }
        } catch(erro) {
            console.error(erro)
        }
    }

    return (
        <>
        <Container>
            <Header />
            <LeftColumn>
                <Avatar 
                    src={responseData ? (responseData?.imageUrl === null ? defaultProfileImage : 
                        `http://localhost:8080/image/${responseData?.imageUrl}`) : defaultProfileImage} 
                    alt={responseData?.name}
                />
            </LeftColumn>
            <RightColumn>
                <Text>Minhas informações:</Text>
                <Form onSubmit={handleSubmit(userEdite)}>
                    <InforInput value={responseData?.name} type='text' label='Nome' disabled={isEditing} register={register('name')}/>
                    <InforInput value={responseData?.email} type='text' label='E-mail'  disabled={isEditing} register={register('email')}/>
                    <InforInput value={responseData?.address} type='text' label='Endereço'  disabled={isEditing} register={register('address')}/>
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