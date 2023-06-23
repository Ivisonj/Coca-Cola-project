import React from "react";

import { StyleButton } from "./style";

interface ButtonProps {
    children?: string
    type?: string
}

export default function MarketButton(props: ButtonProps) {
    return (
        <>
            <StyleButton className={'primary'}>
                {props.children}
            </StyleButton>
        </>
    )
}