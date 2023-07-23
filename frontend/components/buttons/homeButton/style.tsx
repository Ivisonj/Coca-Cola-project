import styled from 'styled-components'

export const ButtonContainer = styled.div `
    width: 30vw;
    height: 15vh;
    margin: 20px;
    background: linear-gradient(to right, red, #8B0000);
    border-radius: 10px;
    border: solid 1px #000;
    display: flex;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    
    &:hover {
        transform: scale(1.1);   
    }
`

export const Icon = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TextButton = styled.h1 `
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;   
`