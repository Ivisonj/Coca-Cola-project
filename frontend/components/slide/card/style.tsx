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

export const ProductImage = styled.img<{ increaseImg: boolean }> `
    width: ${(props) => (props.increaseImg ? '130%' : '70%')};
    height: ${(props) => (props.increaseImg ? '150%' : '70%')};
    transition: 0.5s all ease-in-out;
    margin-top: ${(props) => (props.increaseImg ? '130px' : '0px')};
`

export const ProductPrice = styled.h3<{ increaseImg: boolean }> `
    position: absolute;
    display: ${(props) => (props.increaseText ? 'flex' : 'none')};
    left: -70px;
    top: 170px;
    font-size: 2rem;
    font-weight: bold;
    color: #000;
`