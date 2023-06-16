import styled from "styled-components"

export const Container = styled.div `
    position: absolute;
    width: 18%;
    height: 100%;
    right: 0px;
    z-index: 3;
    background-color: blue;
` 
export const Icon = styled.div `
    width: 100%;
    // height: 60px;
    height: 9.7%;
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
`

export const PurchaseConfirmation = styled.div `
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    background-color: #fff;
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

export const Price = styled.h1 `
    margin-bottom: 20px;
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