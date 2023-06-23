import React from "react";

import { StyleButton } from "./style";

interface ButtonProps {
    children?: string
    type?: string
}

export default function MarketButton(props: ButtonProps) {
    return (
        <>
            {props.type === 'primary' ? (
                <StyleButton className={'primary'}>
                    {props.children}
                </StyleButton>
            ) : props.type === 'secondary' ? (
                <StyleButton className={'secondary'}>
                    <img width="25px" height="25px" src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" alt="MarketIcon" />
                </StyleButton>
            ) : null}
        </>
    )
}