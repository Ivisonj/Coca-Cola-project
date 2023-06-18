import styled from "styled-components"

export const Container = styled.div `
    position: absolute;
    width: 18%;
    height: 60px;
    right: 0px;
    z-index: 3;

    &.expanded {
        position: absolute;
        width: 18%;
        height: 100%;
        right: 0px;
        z-index: 3;
        background-color: blue;
        transition: 0.5s all ease-in-out;
    }
` 
export const Icon = styled.div `
    width: 100%;
    height: 60px;
    // height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
`

export const ProductDetail = styled.div `
    width: 100%;
    height: 65%;
    display: flex;
    align-items: center;
    // justify-content: center;
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
    // justify-content: center;
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


 
// width: 25%;
// height: 100%;
// background-color: red;
// display: flex;
// align-items: center;
// justify-content: center;

// &.expanded {
//     width: 70%;
//     height: 1095px;
//     background-color: blue;
//     display: flex;
//     flex-direction: column;
// }