'use client'
import React, { useState } from 'react';
import { InputContainer, StyleInput, StyleLabel } from './style';

interface InforInputProps {
  type: string
  label: string
  register?: string
  step?: any
  value?: any
  disabled?: boolean
}

export default function InforInput({
  type,
  label,
  register,
  step,
  value,
  disabled, 
}: InforInputProps) {
  const [inputValue, setInputValue] = useState(value)

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <InputContainer>
        <StyleLabel htmlFor="inputField">{label}</StyleLabel>
        <StyleInput
          type={type}
          step={step}
          {...register}
          value={inputValue}
          onChange={handleChange}
          required
          disabled={disabled} 
        />
      </InputContainer>
    </>
  )
}
