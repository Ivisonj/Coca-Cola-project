'use client'
import React, { useState } from 'react';

import { useAmountStore } from '@/stores/useStore';
import { Conatiner, Content, Button } from './style';


interface AmountProps  {
    type: string
}

export default function Amount(props: AmountProps) {
    const { number, incrementNum, decrementNum } = useAmountStore()

    const redButton = {
        backgroundColor: 'red',
        borderColor: '#fff',
        color: '#fff'
    }

    const whiteButton = {
        backgroundColor: '#fff',
        borderColor: '#000',
        color: 'red'
    }

    const buttonStyle = props.type === 'firtsType' ? redButton : whiteButton

    const whiteNumber = {
        color: '#fff'
    }

    const redNumber = {
        color: '#000'
    }

    const NumberColor = props.type === 'firtsType' ? whiteNumber : redNumber

    return (
        <>
            <Conatiner>
                <Button onClick={decrementNum} style={buttonStyle}>-</Button>
                <Content style={NumberColor}>{number}</Content>
                <Button onClick={incrementNum} style={buttonStyle}>+</Button>
            </Conatiner>
        </>
    )
}