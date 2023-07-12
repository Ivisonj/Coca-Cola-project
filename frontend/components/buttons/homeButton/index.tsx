import React from 'react'
import { useRouter } from 'next/navigation'
import { ButtonContainer } from './style'

interface HomeButtonProps {
    children: string
    link?: string 
}

export default function HomeButton({ children, link }: HomeButtonProps) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`${link}`)
    }

    return (
        <ButtonContainer onClick={handleClick}>
            {children}
        </ButtonContainer>
    )
}



