import React, { useState, Children, ReactNode } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { CarouselContainer, GeneralContent, NavButton } from './style'

const maxVisible = 3
  
interface CarouselProps {
    children: ReactNode
    totalCards: number
}

export default function Carousel({ children, totalCards }: CarouselProps ) {
    const [currentActive, setCurrentActive] = useState(0)

    return (
        <>
            <CarouselContainer>
                {currentActive > 0 && (
                    <NavButton 
                        className="toLeft"
                        onClick={() => setCurrentActive((i) => i - 1)}
                    >
                        <AiOutlineLeft />
                    </NavButton>                    
                )}

                {Children.map(children, (childElement, i) => (
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
                ))}

                {currentActive < totalCards - 1 && (
                    <NavButton 
                        className="toRight"
                        onClick={() => setCurrentActive((i) => i + 1)}
                    >
                        <AiOutlineRight />
                    </NavButton>                    
                )}
            </CarouselContainer>
        </>
    )
}


