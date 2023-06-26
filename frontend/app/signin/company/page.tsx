'use client'
import React from 'react'
import Wave from '@/components/wave'
import MainButton from '@/components/buttons/mainButton'
import Input from '@/components/input'

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, CreateAccount } from './style'

export default function CompanySignIn() {
    return (
        <>
            <Container>
                <LeftColumn>
                    <Title>Vamos conectar pessoas?</Title>
                    <Subtitle>
                        Preencha os campos e nos ajude a espalhar a magia da Coca-cola!
                    </Subtitle>
                </LeftColumn>
                <RightColumn>
                    <FormBox>
                        <BoxText>Preencha com seu E-mail e Senha:</BoxText>
                        <form>
                            <Input type="text" label="E-mail" />
                            <Input type="password" label="Senha" />
                            <MainButton width='270px' link='/'>Entrar</MainButton>
                        </form>
                        <CreateAccount href='/signup/company'>Criar uma conta agora</CreateAccount>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}