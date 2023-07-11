import styled from "styled-components"

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
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`

export const CarouselContent = styled.div `
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductInfor = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
`
