import React, { Children } from "react"
import { Container } from "./style"

interface ContentProps {
    children: any
}

export default function Content(props: ContentProps) {
    return (
        <>
            <Container>{props.children}</Container>
        </>
    )
}