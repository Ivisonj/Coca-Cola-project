import React from 'react'
import Link from 'next/link'

import { ContainerButton } from './style'

interface HomeButtonProps {
    children: any
    link?: string 
}

export default function HomeButton({ children, link }: HomeButtonProps) {
    return (
        <Link href={link} style={{textDecoration: 'none'}}>
            <ContainerButton>
                {children}
            </ContainerButton>
        </Link>
    )
}



