'use client'
import React from "react"
import { Container, Row } from './styles'
import { CgMenuGridR } from 'react-icons/cg'

export default function Header() {
    const iconStyle = {
        width: '50px', 
        height: '50px', 
        alignSelf: 'center',
        marginLeft: '15px',
        backgroundColor: '#fff',
        color: 'red', 
    } 

    const logoStyle = {
        width: '75px',
        height: '55px',
        justifySelf: 'center',
        alignSelf: 'center'
    }

    return (
        <>
            <Container>
                <Row>
                    {/* <CgMenuGridR style={iconStyle} /> */}
                </Row>
                <Row>
                    <img style={logoStyle} src="https://logosmarcas.net/wp-content/uploads/2020/08/Coca-Cola-Logo-1987-2009.png" alt="coca-cola" />
                </Row>
                <Row></Row>
            </Container>
        </>
    )
}
