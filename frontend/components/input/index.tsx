import React from 'react'

import { InputContainer, StyleInput, StyleLabel } from './style'

interface inputProps {
    value?: string
    onChange?: string
    type: string
    label: string
}

export default function Input({ value, onChange, type, label }: inputProps) {
    return (
        <>
            <InputContainer>
                <StyleInput type={type} required />
                <StyleLabel htmlFor="inputField">{label}</StyleLabel>
            </InputContainer>
        </>
    )
}

