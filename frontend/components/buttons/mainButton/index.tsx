import React from "react";
import { StyleButton } from "./style";
import Link from "next/link";

interface ButtonProps {
    children?: string
    width?: string 
    margin?: string
    link: string 
}

export default function MainButton({ children, width, margin, link }: ButtonProps) {
    return (
        <>
            <Link href={link}>
                <StyleButton width={width} margin={margin}>
                    {children}
                </StyleButton>
            </Link>
        </>
    )
}
