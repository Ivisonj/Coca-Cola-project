import styled from 'styled-components'

export const Container = styled.div `
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
    font-size: 2rem;
    font-weight: bold;
    color: red;
`