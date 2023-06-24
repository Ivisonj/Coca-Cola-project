import styled from 'styled-components'

export const StyleButton = styled.button `
        width: 160px;
        height: 35px;
        margin: 5px;
        color: #fff;
        background-color: red;
        border-radius: 7px;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        transition: 0.5s all ease-in-out;

        &:active {
                background-color: #A52A2A;
        }        

        &:hover {
                transform: scale(1.1);   
        }
`