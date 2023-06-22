import styled from 'styled-components'

export const StyleButton = styled.button `
    width: 70px;
    height: 65px;
    margin: 10px;
    background-color: #fff;
    border-radius: 50px;
    border: none;
    cursor: pointer; 
    box-shadow: 0px  2px 7px rgba(0, 0, 0, 0.4);
    transition: 0.5s all ease-in-out;

    &.active {
        width: 280px;
        height: 70px;
        margin: 10px;
        background-color: #00FF00;
        border-radius: 40px;
        border: none;
        cursor: pointer; 
        transition: 0.5s all ease-in-out;
    }

    &:hover {
        transform: scale(1.1);   
    }      
`

export const Text = styled.p `
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
`