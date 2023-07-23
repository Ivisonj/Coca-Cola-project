import Wave from '@/components/wave'
import HomeButton from '@/components/buttons/homeButton'

export const baseApiUrl = 'http://localhost:8080'

import { Container, LeftColumn, RightColumn, Title, Subtitle } from './page.module.tsx'

export default async function Home() {

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
          <HomeButton link='/signin' />
        </RightColumn>
      </Container>
      <Wave type='infinite' />
    </>
  )
}
