'use client'
import React from "react"
import { Container, MenuConatiner, MarketIconContainer, Menu } from './styles'


export default function Header() {
    return (
        <>
            <Container>
                <MenuConatiner>
                    
                </MenuConatiner>
                <img width="8%" height="100%" src="https://logosmarcas.net/wp-content/uploads/2020/08/Coca-Cola-Logo-1987-2009.png" alt="coca-cola" />
                <MarketIconContainer>
                    <img  width="25px" height="25px" src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" alt="MarketIcon" />
                </MarketIconContainer>               
            </Container>
        </>
    )
}