import styled from 'styled-components'


export const Container = styled.div `
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: transparent;
    display: flex;
`

export const LeftColumn = styled.div `
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`

export const RightColumn = styled.div `
    width: 55%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`

export const Title = styled.h1 `
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 10px;
    color: #000;
`

export const Subtitle = styled.p `
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    padding: 0px 0px 0px 0px;
`

export const FormBox = styled.div `
    width: 50%;
    height: 80%;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 5px 5px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const BoxText = styled.h1 `
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    margin: 20px;
    color: #000;
`

export const CreateAccount = styled.a `
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: red;
    margin-top: 20px;
`