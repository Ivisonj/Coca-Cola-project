import styled from 'styled-components'

export const StyleButton = styled.button `
        &.primary {
                width: 160px;
                height: 35px;
                margin: 15px;
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
        }

        &.secondary {
                width: 80px;
                height: 75px;
                margin: 15px;
                background-color: #fff;
                border-radius: 50px;
                border: none;
                cursor: pointer; 
                box-shadow: 0px  2px 7px rgba(0, 0, 0, 0.4);
                transition: 0.5s all ease-in-out;
        }
        

        &:hover {
                transform: scale(1.1);   
        }

       
`