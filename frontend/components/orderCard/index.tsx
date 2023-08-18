import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { Container, CardContainer, LeftColumn, RightColumn, ProductImage, Title, Information } from './style'
import { api } from '@/services/api'

type responseDataType = {
    name: string
    amount: number
    price: number
    companyName: string
    imageUrl: string
}

export default function OrderCard() {

    const { 'id': userId } = parseCookies()
    const [ responseData, setResponseData ] = useState<responseDataType>()
    //console.log()

    useEffect(() => {
        async function getOrders() {
            try {
                const getProductOrders = await api.get(`/orders/userId/${userId}`)
                setResponseData(getProductOrders.data)               
            } catch(erro) {
                console.error(erro)
            }
        }
        getOrders()
    }, [])

    return (
        <Container>
            {responseData?.map((item) => (
                <CardContainer key={item.id}>
                    <LeftColumn>
                        <ProductImage src={item.imageUrl} alt={item.name} />
                    </LeftColumn>
                    <RightColumn>
                        <Title>Detalhes do Produto:</Title>
                        <Information>
                            <strong>Nome: </strong>
                            {item.productName}
                        </Information>
                        <Information>
                            <strong>Quantidade: </strong>
                            {item.amount}
                        </Information>
                        <Information>
                            <strong>Preço: </strong>
                            {item.price.toFixed(2)}
                        </Information>
                        <Information>
                            <strong>Vendedor: </strong>
                            {item.companyName}
                        </Information>
                    </RightColumn>
                </CardContainer>
            ))}
    </Container>
    )
}