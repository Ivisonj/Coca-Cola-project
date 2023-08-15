import styled from "styled-components"

export const Container = styled.div `
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TableContainer = styled.div `
    width: 90vw;
    height: 85vh;
    background-color: #fff;
    border-radius: 15px;
    margin-top: 60px; 
    padding: 30px;
    box-shadow: 0px 5px 5px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1 `
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #000;

    margin-bottom: 20px;
`

export const ButtonContainer = styled.aside `
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const UserContent = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 70px 60px 0px 60px;
` 