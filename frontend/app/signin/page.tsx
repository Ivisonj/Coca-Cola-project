'use client'
import Wave from "@/components/wave"
import MainButton from "@/components/buttons/mainButton"
import Input from "@/components/input"

import { Container, LeftColumn, Title, Subtitle, RightColumn, FormBox, BoxText, CreateAccount } from './style'

export default function SignIn() {
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
                        <BoxText>Preencha com seu E-mail e Senha:</BoxText>
                        <form>
                            <Input type="text" label="E-mail" />
                            <Input type="password" label="Senha" />
                            <MainButton width='270px' link='/'>Entrar</MainButton>
                        </form>
                        <CreateAccount href='/signup'>Criar uma conta agora</CreateAccount>
                    </FormBox>
                </RightColumn>
            </Container>
            <Wave type='infinite' />
        </>
    )
}