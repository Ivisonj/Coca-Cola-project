'use client'
import React from 'react'
import { PiBeerBottleBold } from 'react-icons/pi'
import { useRouter } from 'next/navigation'
import { ButtonContainer, Icon, TextButton } from './style'

interface HomeButtonProps {
    link: string 
}

export default function HomeButton({ link }: HomeButtonProps) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`${link}`)
    }

    return (
        <ButtonContainer onClick={handleClick}>
            <Icon>
              <PiBeerBottleBold style={{ fontSize: '1.5rem', color: '#fff' }}/>
            </Icon>
            <TextButton>Iniciar agora!</TextButton>
        </ButtonContainer>
    )
}



