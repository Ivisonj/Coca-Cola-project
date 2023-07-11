import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { BsFillBuildingFill } from 'react-icons/bs'
import { Container, Content, Text } from './style'

interface TabsProps {
    userFunc: () => void
    companyFunc: () => void
    userClassName: any
    companyClassName: any
}

export default function Tabs({ userFunc, companyFunc, userClassName, companyClassName}: TabsProps) {

    return (
        <Container>
            <Content className={userClassName} onClick={userFunc}>
                <FaUser style={{ color: 'red'}}/>
                <Text>Usuário</Text>
            </Content>
            <Content className={companyClassName} onClick={companyFunc}>
                <BsFillBuildingFill style={{ color: 'red'}}/>
                <Text>Empresa</Text>
            </Content>
        </Container>
    )
}