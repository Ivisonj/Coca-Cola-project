import Header from "@/components/header"
import MainButton from "@/components/buttons/PrimaryButton"
import HorizontalCard from "@/components/horizontalCard"

import { Container, ButtonContainer, TitleContainer, Title, CardContainer } from '../../../styles/company.module'
import { api } from "@/services/api"

const defaultImage = '/images/coca-1.png'

export default async function Company() {
    
    const response = await api.get('/products')
    const responseData = response.data
    console.log(responseData)

    const productImage = `http://localhost:8080/image/${responseData?.imageUrl}`

    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                    <Title>Produtos</Title>
                </TitleContainer>
                <ButtonContainer>
                    <MainButton goTo="/company/register">novo produto</MainButton>
                </ButtonContainer>
                <CardContainer>
                    {responseData?.map((item) =>(
                        <HorizontalCard 
                            key={item.id} 
                            id={item.id}
                            name={item.name}
                            price={item.price} 
                            image={item.imageUrl === null ? defaultImage : productImage}
                        />
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}