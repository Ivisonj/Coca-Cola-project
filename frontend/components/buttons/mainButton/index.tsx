import React from "react";
import { StyleButton } from "./style";

interface ButtonProps {
    children?: string
    width?: string 
    margin?: string
    link?: string 
    onClick?: () => void
    type?: "button" | "submit"
}

export default function MainButton({ children, width, margin, onClick, type= 'button' }: ButtonProps) {
    return (
        <>
            <StyleButton width={width} margin={margin} type={type} onClick={onClick}>
                {children}
            </StyleButton>
        </>
    )
}
