import styled from 'styled-components'

export const CardContainer = styled.div `
    width: 100%;
    height: 100%;
    background-color: hsl(200deg, 40%, calc(100% - var(--abs-compensation) * 50%));
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center; 
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
export const ProductImage = styled.img<{ increaseImg: boolean }> `
    width: ${(props) => (props.increaseImg ? '130%' : '70%')};
    height: ${(props) => (props.increaseImg ? '150%' : '70%')};
    transition: 0.5s all ease-in-out;
`