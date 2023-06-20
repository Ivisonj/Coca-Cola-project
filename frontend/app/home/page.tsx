'use client'
import Hearder from '@/components/header'
import Wave from '@/components/wave'
import Content from '@/components/content'
import Market from '@/components/market'
import Slidee from '@/components/slide/carousel'

import { LeftContainer, RightContainer, Title, TextContent } from './style'


const products = [
    {
        name: 'Coca-cola 600ml',
        price: 10.00,
        linkProduct: 'https://www.designi.com.br/images/preview/10025261.jpg'
    },
]

 
export default function Home() {
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
                {/* {products.map((item, index) => (
                    <Card key={index} name={item.name} img={item.linkProduct}/>
                ))} */}
                <Slidee />
            </RightContainer>
        </Content> 
        <Wave />
        </>
    )
} 