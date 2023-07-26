'use client'
import { useRouter } from 'next/navigation'
import { ButtonContainer } from './style'

interface CreateAccountButtonProps {
    children: any
    link: string
}

export default function CreateAccountButton({ children, link }: CreateAccountButtonProps) {

    const router = useRouter()
    
    const handleClick = () => {
        router.push(`${link}`)
    }

    return (
        <ButtonContainer onClick={handleClick}>{children}</ButtonContainer>
    )
}