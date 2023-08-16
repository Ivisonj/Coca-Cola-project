import styled from 'styled-components'

export const Container = styled.div `
    width: 260px;
    height: 115px;
    border-radius: 10px;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.4);
    margin: 10px 10px;
    display: flex;

    &:hover {
        background-color: #ddd;
        cursor: pointer;
    }
`

export const ImageContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InforContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ProductName = styled.h1 `
    font-size: .8rem;
    font-weight: 700;
    color: #000;
`

export const Price = styled.h3 `
    font-size: .9rem;
    font-weight: bold;
    color: green;
`

export const LogoImage = styled.img `
    width: 85%;
    height: 85%;
    border-radius: 10px;
    border: solid 1px #ddd;
`