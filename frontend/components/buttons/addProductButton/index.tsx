'use client'
import React, { useState, createContext } from "react";
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { BsFillCartFill } from 'react-icons/bs';
import { useStore } from "@/stores/useStore";

import { StyleButton, Text } from "./style";

export const AddProductButtonContext = createContext<boolean>(false);

interface ButtonProps {
  children?: string;
  type?: string;
}

export default function AddProductButton(props: ButtonProps) {
  const [isActive, setisActive] = useState(false)
  const { buttonState, toggleButton } = useStore()

  const handleClick = () => {
    setisActive(!isActive)
    toggleButton()
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
            <BsFillCartFill style={{ width: '25px', height: '25px', color: "red" }}/>
          </StyleButton>
        )}  
    </>
  );
}
