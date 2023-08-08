import styled from "styled-components"

export const Container = styled.div `
    position: absolute;
    width: 9%;
    height: 60px;
    right: 0px;
    z-index: 4;
    transition: 0.5s all ease-in-out;

    &.expanded {
        position: absolute;
        width: 18%;
        height: 100%;
        right: 0px;
        z-index: 4;
        transition: 0.5s all ease-in-out;
    }
` 
export const Icons = styled.aside `
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    cursor: pointer;

    &.justify {
        justify-content: space-around;
    }
`

export const MarketIcon = styled.aside `
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const IconLeftColumn = styled.aside `
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const IconRightColumn = styled.aside `
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10px;
`

export const AmountProducts = styled.aside `
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px #000;
    border-radius: 100%;
    background-color: #fff;

    font-size: .7rem;
    color: #000;
`

export const ProductDetail = styled.div `
    width: 100%;
    height: 65%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: red;

    &.donShowDisplay {
        display: none;
    }
`

export const PurchaseConfirmation = styled.div `
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;

    &.donShowDisplay {
        display: none;
    }
`

export const Product = styled.div `
    margin-top: 30px;
    width: 50%;
    height: 32%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #fff;
`

export const ProductName = styled.h1 `
    margin: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #fff;
`

export const Text = styled.h1 `
    margin-bottom: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    color: #fff;
`
