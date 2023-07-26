'use client'
import { useRouter } from 'next/navigation'
import { IoMdArrowBack } from 'react-icons/io'

import { Icon } from './style'

interface ComeBackProps {
    comeBackTo: string
}

export default function ComeBack({ comeBackTo }: ComeBackProps) {

    const router = useRouter()

    const handleClick = () => {
        router.push(`${comeBackTo}`)
    }

    return (
        <Icon>
            <IoMdArrowBack onClick={handleClick} style={{ fontSize: '2rem', cursor: 'pointer' }}/>
        </Icon>
    )
}