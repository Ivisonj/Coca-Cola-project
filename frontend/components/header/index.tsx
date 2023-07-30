'use client'
import React from "react"
import { CgMenuGridR } from 'react-icons/cg'
import { SiCocacola } from 'react-icons/si'
import Menu from "../menu"

import { Container, IconContainer, MenuContainer } from './styles'

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
                <MenuContainer>
                    <Menu />
                </MenuContainer>
                <IconContainer>
                    <SiCocacola style={{ color: 'red', fontSize: '5.5rem' }} />
                </IconContainer>
                <IconContainer />
            </Container>
        </>
    )
}
