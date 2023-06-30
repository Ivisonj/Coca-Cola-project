import React from 'react'
import { InputContainer, StyleInput, StyleLabel } from './style'

interface InputProps {
  type: string
  label: string
  register: any
}

export default function Input({ type, label, register }: InputProps) {
  return (
    <>
      <InputContainer>
        <StyleInput type={type} {...register} required />
        <StyleLabel htmlFor="inputField">{label}</StyleLabel>
      </InputContainer>
    </>
  )
}



