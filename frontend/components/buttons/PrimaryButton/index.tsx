'use client'
import React from "react"
import { useRouter } from "next/navigation"
import { StyleButton } from "./style"

interface ButtonProps {
    children?: string
    width?: string 
    margin?: string
    onClick?: () => void 
    type?: "button" | "submit"
    bgColor?: 'red' | 'MediumSeaGreen' | 'DarkGray' 
}

export default function PrimaryButton({ children, width, margin, onClick, type= 'button', bgColor= 'red' }: ButtonProps) {
    return (
        <>
            <StyleButton width={width} margin={margin} type={type} onClick={onClick} bgColor={bgColor}>
                {children}
            </StyleButton>
        </>
    )
}
