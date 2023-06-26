'use client'
import Wave from '@/components/wave'
import MainButton from '@/components/buttons/mainButton'

import { Container, LeftColumn, RightColumn, Title, Subtitle, BoxButton, BoxText } from './page.module.tsx'

export default function Home() {
  return (
    <>
      <Container>
        <LeftColumn>
          <Title>Seja Bem-vindo(a)!</Title>
          <Subtitle>
            Desfrute de uma conexão exclusiva com a Coca-Cola! <br/>
            Escolha uma opção para se conectar de acordo com suas necessidades:
          </Subtitle>
        </LeftColumn>
        <RightColumn>
          <BoxButton>
            <BoxText>O que você é?</BoxText>
            <MainButton margin='20px' width='270px' link='/signin/company'>Sou uma empresa</MainButton>
            <MainButton width='270px' link='/signin'>Sou usuário</MainButton>
          </BoxButton>
        </RightColumn>
      </Container>
      <Wave type='infinite' />
    </>
  )
}
