import styled from 'styled-components'

export const CarouselContainer = styled.div `
    position: relative;
    width: 15rem;
    height: 15rem;
    perspective: 500px;
    transform-style: preserve-3d;
`

export const GeneralContent = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(var(--compensation) * 50deg))
    scaleY(calc(1 + var(--abs-compensation) * -0.4))
    translateZ(calc(var(--abs-compensation) * -30rem))
    translateX(calc(var(--direction) * -5rem));
    filter: blur(calc(var(--abs-compensation) * 1rem));
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