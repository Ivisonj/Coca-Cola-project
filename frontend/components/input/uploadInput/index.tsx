'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { MdPhotoCamera } from 'react-icons/md'

import { InputContainer, StyleInput, StyleLabel, Icon } from './style'

interface inputProps {
    value?: string
    onChange?: string
    type?: string
    label: string
}

export default function UploadInput({ value, onChange, type, label }: inputProps) {
    const [selectFile, setSelectFile] = useState(null)

    const handleFileChange = (event) => {
        setSelectFile(event.target.files[0])
    }

    return (
        <>
            <InputContainer>
                <StyleInput type={type} onChange={handleFileChange}/>            
                <StyleLabel htmlFor="inputField">{label}</StyleLabel> 
            </InputContainer>
        </>
    )
}
