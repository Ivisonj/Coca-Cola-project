'use client'
import React from "react"
import { Container, Row } from './styles'
import Market from "../market"

export default function Header() {
    return (
        <>
            <Container>
                <Row style={{ justifyContent: 'center' }}>
                    <img width="20%" height="100%" src="https://logosmarcas.net/wp-content/uploads/2020/08/Coca-Cola-Logo-1987-2009.png" alt="coca-cola" />
                </Row>
            </Container>
        </>
    )
}