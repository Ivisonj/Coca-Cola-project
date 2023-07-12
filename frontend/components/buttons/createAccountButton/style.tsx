import styled from 'styled-components'

export const ButtonContainer = styled.div `
    width: 20%;
    height: 60%;
    border: solid 1px #ddd;
    border-radius: 15px;
    margin: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    &:active {
        border: solid 1px red;
    }  

    &:hover {
        cursor: pointer;
        background-color: #ddd;
    }
`