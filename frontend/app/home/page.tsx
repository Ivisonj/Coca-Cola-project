'use client'
import Hearder from '@/components/header'
import Wave from '@/components/wave'
import Content from '@/components/content'

import { LeftContainer, RightContainer, Title, TextContent } from './style'
 
export default function Home() {
    return (
        <>
        <Hearder />
        <Content>
            <LeftContainer>
                <Title>Vai uma Coca?</Title>
                <TextContent>
                    Selecione o produto desejado <br/>
                    e adicione ao carrinho. 
                </TextContent>
            </LeftContainer>
            <RightContainer>

            </RightContainer>
        </Content> 
        <Wave />
        </>
    )
}