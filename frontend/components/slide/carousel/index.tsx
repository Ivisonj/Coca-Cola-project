import React, { createContext, useState, Children, ReactNode } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

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

    return (
        <>
            <CarouselContext.Provider value={{currentActive, index: 0}}>
                <CarouselContainer>
                    {currentActive > 0 && (
                        <NavButton 
                            className="toLeft"
                            onClick={() => setCurrentActive((i) => i - 1)}
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
                            onClick={() => setCurrentActive((i) => i + 1)}
                        >
                            <AiOutlineRight color="red"/>
                        </NavButton>                    
                    )}
                </CarouselContainer>
            </CarouselContext.Provider>
        </>
    )
}


