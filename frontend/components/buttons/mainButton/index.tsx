import React from "react";

import { StyleButton } from "./style";

interface ButtonProps {
    children?: string
    type?: string
}

export default function MainButton(props: ButtonProps) {
    return (
        <>
            <StyleButton className={'primary'}>
                {props.children}
            </StyleButton>
        </>
    )
}