import styled from "styled-components"

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const LeftColumn = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`

export const RightColumn = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`

export const Avatar = styled.aside `
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: solid 1px #000;

`

export const Text = styled.h1 `
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
`

export const Form = styled.form`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
`

export const ButtonsContainer = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    margin: 30px;
`

