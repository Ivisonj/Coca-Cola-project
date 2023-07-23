import Header from "@/components/header"
import MainButton from "@/components/buttons/mainButton"
import HorizontalCard from "@/components/horizontalCard"

import { Container, ButtonContainer, TitleContainer, Title, CardContainer } from '../../../styles/company.module'
import { api } from "@/services/api"
import { baseApiUrl } from "../page"

const registeredProducts = [
    {
        name: 'Coca-Cola',
        price: 10,
        image: '/images/coca-1.png'
    }
]

export default function CompanyDashboard() {
    
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
                    {registeredProducts.map((item, index) =>(
                        <HorizontalCard goTo="/company-dashboard" key={index} name={item.name} price={item.price} image={item.image}/>
                    ))}
                </CardContainer>
            </Container>
        </>
    )
}