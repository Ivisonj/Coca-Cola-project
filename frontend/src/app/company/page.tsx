import Header from "@/components/header"
import MainButton from "@/components/buttons/mainButton"
import HorizontalCard from "@/components/horizontalCard"

import { Container, ButtonContainer, TitleContainer, Title, CardContainer } from '../../../styles/company.module'
import { api } from "@/services/api"

const defaultImage = '/images/coca-1.png'

export default async function CompanyDashboard() {
    
    const response = await api.get('/products')
    const responseData = response.data
    console.log(responseData)

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
                            goTo="/company" 
                            key={item.id} 
                            name={item.name}
                            price={item.price} 
                            image={item.imageUrl === null ? defaultImage : item.imageUrl}
                        />
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}