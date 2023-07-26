'use client'
import React, { createContext, useState, Children, ReactNode } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useRightButton, useLeftButton } from '../../../stores/useStore'

import { CarouselContainer, GeneralContent, NavButton } from './style'


export const CarouselContext = createContext<{ currentActive: number; index: number }>({
    currentActive: 0,
    index: 0,
})

const maxVisible = 3
  
interface CarouselProps {
    children: ReactNode
    totalCards: number
}

export default function Carousel({ children, totalCards }: CarouselProps ) {
    const [currentActive, setCurrentActive] = useState(0)
    const { rightButtonState, setRightButtonState } = useRightButton()
    const { leftButtonState, setLeftButtonState } = useLeftButton()

    const rightHandleClick = () => {
        setRightButtonState(true)
        setTimeout(() => {
            setRightButtonState(false)
        }, 2000)
        console.log('direitoooo', rightButtonState)
    }
    
    const leftHandleClick = () => {
        setLeftButtonState(true)
        setTimeout(() => {
            setLeftButtonState(false)
        }, 2000)
        console.log('esquerdoooo', leftButtonState)
    }

    const incrementNumber = () => {
        setCurrentActive((i) => i + 1)
        leftHandleClick()
    }

    const decrementNumber = () => {
        setCurrentActive((i) => i - 1)
        rightHandleClick()
    } 

    return (
        <>
            <CarouselContext.Provider value={{currentActive, index: 0}}>
                <CarouselContainer>
                    {currentActive > 0 && (
                        <NavButton 
                            className="toLeft"
                            onClick={decrementNumber}
                        >
                            <AiOutlineLeft color="red"/>
                        </NavButton>                    
                    )}

                    {Children.map(children, (childElement, i) => (
                        <CarouselContext.Provider value={{currentActive, index: i}}>
                            <GeneralContent
                                key={i}
                                style={{
                                    "--currentActive": i === currentActive ? 1 : 0,
                                    "--compensation": (currentActive - i) / 3,
                                    "--direction": Math.sign(currentActive - i),
                                    "--abs-compensation": Math.abs(currentActive - i) / 3,
                                    pointerEvents: currentActive === i ? "auto" : "none",
                                    opacity: Math.abs(currentActive - i) >= maxVisible ? "0" : "1",
                                    display: Math.abs(currentActive - i) > maxVisible ? "none" : "block",
                                }}
                            >
                                {childElement}
                            </GeneralContent>
                        </CarouselContext.Provider>
                    ))}

                    {currentActive < totalCards - 1 && (
                        <NavButton 
                            className="toRight"
                            onClick={incrementNumber}
                        >
                            <AiOutlineRight color="red"/>
                        </NavButton>                    
                    )}
                </CarouselContainer>
            </CarouselContext.Provider>
        </>
    )
}


