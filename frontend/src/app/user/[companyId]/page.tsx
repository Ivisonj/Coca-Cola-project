'use client'
import Hearder from '@/components/header'
import Wave from '@/components/wave'
import Market from '@/components/market'
import Carousel from '@/components/slide/carousel'
import Card from '@/components/slide/card'
import AddProductButton from '@/components/buttons/addProductButton'
import Amount from '@/components/amount'

import {  Container, LeftColumn, RightColumn, CarouselContent, ProductInfor, Title, Subtitle } from '../../../../styles/companyProducts.module'

const contentCards = [
    {
      name: "Coca-1",
      img: '/images/coca-1.png', 
      price: 5.99
    },
    {
      name: "Coca-2",
      img: '/images/coca-2.png',
      price: 7.10
    },
    {
      name: "Coca-3",
      img: '/images/coca-3.png',
      price: 9.50
    },
    {
      name: "Coca-4",
      img: '/images/coca-4.png',
      price: 10.00
    },
   
]


export default function CompanyProducts({params}: { params: { companyId: string } }) {
    const totalCards = contentCards.length

    return (
        <>
        <Hearder />
        <Market />
        <Container>
            <LeftColumn>
                <Title>Vai uma Coca?</Title>
                <Subtitle>
                    Selecione o produto desejado <br/>
                    e adicione ao carrinho. 
                </Subtitle>
            </LeftColumn>
            <RightColumn>
                <CarouselContent>
                    <Carousel totalCards={totalCards}>
                        {contentCards.map((_, i) => (
                            <Card 
                                key={i}
                                name={contentCards[i].name}
                                img={contentCards[i].img}   
                                price={contentCards[i].price}          
                            />
                        ))}
                    </Carousel>
                </CarouselContent>
                <ProductInfor>
                    <Amount type=''/>
                    <AddProductButton />
                </ProductInfor>
            </RightColumn>
        </Container> 
        <Wave />
        </>
    )
}