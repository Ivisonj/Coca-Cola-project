'use client'
import Hearder from '@/components/header'
import Wave from '@/components/wave'
import Content from '@/components/content'
import Market from '@/components/market'
import Carousel from '@/components/slide/carousel'
import Card from '@/components/slide/card'


import { LeftContainer, RightContainer, Title, TextContent } from './style'


const contentCards = [
    {
      name: "Coca-1",
      img: '/images/coca-1.png'
    },
    {
      name: "Coca-2",
      img: '/images/coca-2.png'
    },
    {
      name: "Coca-3",
      img: '/images/coca-3.png'
    },
    {
      name: "Coca-4",
      img: '/images/coca-4.png'
    },
   
]
 
export default function Home() {
    const totalCards = contentCards.length

    return (
        <>
        <Hearder />
        <Market />
        <Content>
            <LeftContainer>
                <Title>Vai uma Coca?</Title>
                <TextContent>
                    Selecione o produto desejado <br/>
                    e adicione ao carrinho. 
                </TextContent>
            </LeftContainer>
            <RightContainer>
                <Carousel totalCards={totalCards}>
                    {contentCards.map((_, i) => (
                        <Card 
                            key={i}
                            name={contentCards[i].name}
                            img={contentCards[i].img}                   
                        />
                    ))}
                 </Carousel>
            </RightContainer>
        </Content> 
        <Wave />
        </>
    )
} 