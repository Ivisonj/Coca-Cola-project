'use client'
import { useEffect, useState } from 'react'

import Hearder from '@/components/header'
import Wave from '@/components/wave'
import Market from '@/components/market'
import Carousel from '@/components/slide/carousel'
import Card from '@/components/slide/card'
import AddProductButton from '@/components/buttons/addProductButton'
import Amount from '@/components/amount'
import { api } from '@/services/api'

import {  Container, LeftColumn, RightColumn, CarouselContent, ProductInfor, Title, Subtitle } from '../../../../styles/companyProducts.module'

const defaultImage = '/images/coca-cola-desenho.png'

export default function CompanyProducts({params}: { params: { companyId: string } }) {

    const [ responseData, setResponseData ] = useState()
    console.log('se liga', )

    //total de cards do carrossel
    const totalCards = responseData?.length

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get(`/products/parentId/${params.companyId}`)
                setResponseData(response.data)
            } catch(err) {
                console.error(err)
            }
        }
        getProducts()
    }, [])

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
                        {responseData?.map((_, i) => (
                            <Card 
                                key={i}
                                name={responseData[i]?.name}
                                price={responseData[i]?.price}          
                                img={responseData[i]?.imageUrl === null ? defaultImage : `http://localhost:8080/image/${responseData[i]?.imageUrl}`}   
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