import styled from 'styled-components'

export const StyleButton = styled.button `
        width: ${props => props.width};
        height: 40px;
        padding: 10px;
        margin: ${props => props.margin};
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