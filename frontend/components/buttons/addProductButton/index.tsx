import React, { useState } from "react";
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { BsFillCartFill } from 'react-icons/bs'


import { StyleButton, Text } from "./style";

interface ButtonProps {
    children?: string
    type?: string
}

export default function AddProductButton(props: ButtonProps) {
    const [ isActive, setisActive ] = useState(false)

    const handleClick = () => {
        setisActive(!isActive)
    }

    return (
        <>
            {isActive ? (
                <StyleButton onClick={handleClick} className="active">
                    <IoCheckmarkDoneCircleSharp style={{ width: '25px', height: '25px', color: "#fff" }}/>
                    <Text>Produto Adicionado ao Carrinho</Text>
                </StyleButton>
            ) : (
                <StyleButton onClick={handleClick}>
                    <BsFillCartFill style={{ width: '25px', height: '25px' }}/>
                </StyleButton>
            )}
        </>
    )
}

