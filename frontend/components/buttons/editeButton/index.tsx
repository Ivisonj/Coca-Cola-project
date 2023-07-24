'use client'
import React from "react"
import { useRouter } from "next/navigation"
import { StyleButton } from "./style"

interface ButtonProps {
    children?: string
    width?: string 
    margin?: string
    onClick?: () => void
}

export default function EditeButton({ children, width, margin, onClick }: ButtonProps) {

    return (
        <>
            <StyleButton width={width} margin={margin} type='button' onClick={onClick}>
                {children}
            </StyleButton>
        </>
    )
}
