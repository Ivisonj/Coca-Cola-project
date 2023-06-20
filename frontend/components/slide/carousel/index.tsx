import React, { useState, Children, ReactNode } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { CardContainer, ProductName, CarouselContainer, CarouselContent, NavButton } from './style'

const maxVisible = 3
const contentCards = [
    {
      titulo: "Programador CS",
      conteudo:
        "Ajudando pessoas com o que sei. Segue na base que você vai longe!",
    },
    {
      titulo: "HTML",
      conteudo:
        "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
    },
    {
      titulo: "CSS",
      conteudo:
        "CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em uma linguagem de marcação como HTML.",
    },
    {
      titulo: "JavaScript",
      conteudo:
        "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multi-paradigma.",
    },
    {
      titulo: "React",
      conteudo:
        "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    },
    {
      titulo: "GIT",
      conteudo:
        "Git é um sistema de controle de versão distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
    },
]
  
interface CardProps {
    name: string
    imgLink?: string
}

const Card: React.FC<CardProps> = ({ name, imgLink }) =>  (
    <>
        <CardContainer>
            <ProductName>{name}</ProductName>
        </CardContainer>
    </>
)

interface CarouselProps {
    children: ReactNode
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [currentActive, setCurrentActive] = useState(0)
    const totalCards = contentCards.length

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
                    <CarouselContent
                        key={i}
                        style={{
                            "--atualAtivo": i === currentActive ? 1 : 0,
                            "--compensacao": (currentActive - i) / 3,
                            "--direcao": Math.sign(currentActive - i),
                            "--abs-compensacao": Math.abs(currentActive - i) / 3,
                            pointerEvents: currentActive === i ? "auto" : "none",
                            opacity: Math.abs(currentActive - i) >= maxVisible ? "0" : "1",
                            display: Math.abs(currentActive - i) > maxVisible ? "none" : "block",
                        }}
                    >
                        {childElement}
                    </CarouselContent>
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


export default function Slidee() {
    return (
        <Carousel>
            {contentCards.map((_, i) => (
                <Card 
                    key={i}
                    name={contentCards[i].titulo}                   
                />
            ))}
        </Carousel>
    )
}