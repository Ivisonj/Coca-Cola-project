import React from 'react';
import { WaveContainer, Section, Button } from "./style"
import { useRightButton, useLeftButton } from '../../stores/useStore'

export default function Wave() {
    const { rightButtonState} = useRightButton()
    const { leftButtonState } = useLeftButton()

    return (
        <>
            <Section>
                <WaveContainer className={ rightButtonState ? "right-wave-animation" : leftButtonState ? "left-wave-animation" : ""}/>
            </Section>
        </>
    )
}
