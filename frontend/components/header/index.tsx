'use client'
import React from "react"
import { Container, Row, Icon } from './styles'

export default function Header() {
    return (
        <>
            <Container>
                <Row style={{ justifyContent: 'flex-start' }}></Row>
                <Row style={{ justifyContent: 'center' }}>
                    <img width="20%" height="100%" src="https://logosmarcas.net/wp-content/uploads/2020/08/Coca-Cola-Logo-1987-2009.png" alt="coca-cola" />
                </Row>
                <Row style={{ justifyContent: 'flex-end' }}>
                    <Icon>
                        <img  width="25px" height="25px" src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" alt="MarketIcon" />
                    </Icon>
                </Row>
            </Container>
        </>
    )
}