'use client'
import Wave from '@/components/wave'
import MainButton from '@/components/buttons/mainButton'
import HomeButton from '@/components/homeButton'
import { FaUser } from 'react-icons/fa'
import { BsFillBuildingFill } from 'react-icons/bs'

export const baseApiUrl = 'http://localhost:8080'

import { Container, LeftColumn, RightColumn, Title, Subtitle, Icon, TextButton } from './page.module.tsx'

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
          <HomeButton link='/signin/company'>
            <Icon>
              <BsFillBuildingFill style={{ fontSize: '1.5rem', color: '#fff' }}/>
            </Icon>
            <TextButton>sou uma empresa</TextButton>
          </HomeButton>
          <HomeButton link='/signin'>
            <Icon>
              <FaUser style={{ fontSize: '1.5rem', color: '#fff' }}/>
            </Icon>
            <TextButton>sou usuário</TextButton>
          </HomeButton>
        </RightColumn>
      </Container>
      <Wave type='infinite' />
    </>
  )
}
