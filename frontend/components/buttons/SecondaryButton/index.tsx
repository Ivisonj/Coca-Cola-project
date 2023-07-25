'use client'
import React from "react"
import { useRouter } from "next/navigation"
import { StyleButton } from "./style"

interface ButtonProps {
    children?: string
    width?: string 
    margin?: string
    onClick?: () => void
    bgColor?: 'red' | 'MediumSeaGreen' | 'DarkGray' 
}

export default function SecondaryButton({ children, width, margin, onClick, bgColor }: ButtonProps) {

    return (
        <>
            <StyleButton width={width} margin={margin} type='button' onClick={onClick} bgColor={bgColor}>
                {children}
            </StyleButton>
        </>
    )
}
