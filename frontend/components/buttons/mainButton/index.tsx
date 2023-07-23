'use client'
import React from "react"
import { useRouter } from "next/navigation"
import { StyleButton } from "./style"

interface ButtonProps {
    children?: string
    width?: string 
    margin?: string
    goTo: string
    type?: "button" | "submit"
}

export default function MainButton({ children, width, margin, type= 'button', goTo }: ButtonProps) {
    const router = useRouter()

    const handleClick = () => {
        router.push(goTo)
    }

    return (
        <>
            <StyleButton width={width} margin={margin} type={type} onClick={handleClick}>
                {children}
            </StyleButton>
        </>
    )
}
