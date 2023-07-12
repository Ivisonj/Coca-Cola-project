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
