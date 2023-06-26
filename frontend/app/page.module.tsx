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
    padding: 0px 0px 0px 60px;
`

export const Icon = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TextButton = styled.h1 `
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;   
`