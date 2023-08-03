'use client'
import React, { useEffect, useState } from "react"
import { CgMenuGridR } from 'react-icons/cg'
import { SiCocacola } from 'react-icons/si'
import Menu from "../menu"

import { Container, IconContainer, MenuContainer } from './styles'

export default function Header() {
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
