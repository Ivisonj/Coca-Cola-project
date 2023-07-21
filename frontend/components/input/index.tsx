import React from 'react'
import { InputContainer, StyleInput, StyleLabel } from './style'

interface InputProps {
  type: string
  label: string
  register: any
  step?: any
}

export default function Input({ type, label, register, step }: InputProps) {
  return (
    <>
      <InputContainer>
        <StyleInput type={type} step={step} {...register} required />
        <StyleLabel htmlFor="inputField">{label}</StyleLabel>
      </InputContainer>
    </>
  )
}



