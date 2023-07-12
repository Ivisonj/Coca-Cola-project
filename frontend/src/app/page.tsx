'use client'
import Wave from '@/components/wave'
import HomeButton from '@/components/buttons/homeButton'
import { PiBeerBottleBold } from 'react-icons/pi'

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
          <HomeButton link='/signin'>
            <Icon>
              <PiBeerBottleBold style={{ fontSize: '1.5rem', color: '#fff' }}/>
            </Icon>
            <TextButton>Iniciar agora!</TextButton>
          </HomeButton>
        </RightColumn>
      </Container>
      <Wave type='infinite' />
    </>
  )
}
