import styled from 'styled-components'

export const CardContainer = styled.div `
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: hsl(200deg, 40%, calc(100% - var(--abs-compensacao) * 50%));
    border-radius: 1rem;
    color: #9ca3af;
    text-align: justify;
    transition: all 0.3s ease-out;
`

export const ProductName = styled.h2 `
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 0.7em;
    color: #1f2937;

    transition: all 0.3s ease-out;
    opacity: var(--ativo);
    user-select: none;
`

export const CarouselContainer = styled.div `
    position: relative;
    width: 15rem;
    height: 15rem;
    perspective: 500px;
    transform-style: preserve-3d;
`

export const CarouselContent = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(var(--compensacao) * 50deg))
    scaleY(calc(1 + var(--abs-compensacao) * -0.4))
    translateZ(calc(var(--abs-compensacao) * -30rem))
    translateX(calc(var(--direcao) * -5rem));
    filter: blur(calc(var(--abs-compensacao) * 1rem));
    transition: all 0.3s ease-out;
`

export const NavButton = styled.button `
    color: white;
    font-size: 5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    background: unset;
    border: unset;

    &.toLeft {
    transform: translateX(-100%) translateY(-50%);
    }

    &.toRight {
    right: 0;
    transform: translateX(100%) translateY(-50%);
    }
`