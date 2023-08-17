import styled from "styled-components"

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    padding-top: 70px; 
    display: flex;
    justify-content: center;

`
export const Content = styled.aside `
    width: 90%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1 `
    font-size: 1.5rem;
    font-weight: bold;
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
    padding: 90px 60px 0px 60px;
` 