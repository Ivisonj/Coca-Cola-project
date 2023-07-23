'use client'
import React from 'react';
import { WaveContainer, Section } from "./style"
import { useRightButton, useLeftButton } from '../../stores/useStore'

interface WaveProps {
    type?: string
}

export default function Wave({ type }: WaveProps) {
    const { rightButtonState } = useRightButton()
    const { leftButtonState  } = useLeftButton()

    return (
        <>
            <Section>
                <WaveContainer 
                    className={ 
                        type === 'infinite' ? "infinite-animation" :
                        rightButtonState ? "right-wave-animation" :
                        leftButtonState ? "left-wave-animation" : ""
                    }
                />
            </Section>
        </>
    )
}
