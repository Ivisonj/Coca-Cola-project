'use client'
import React from "react"
import { StyleButton } from "./style"

interface ButtonProps {
    children?: string
    width?: string 
    margin?: string
    onClick?: () => void
    type?: "button" | "submit"
}

export default function MainButton({ children, width, margin, type= 'button', onClick }: ButtonProps) {

    return (
        <>
            <StyleButton width={width} margin={margin} type={type} onClick={onclick}>
                {children}
            </StyleButton>
        </>
    )
}
