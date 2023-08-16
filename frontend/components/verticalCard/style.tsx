import styled from 'styled-components'

export const Container = styled.div `
    width: 140px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.4);
    margin: 10px 20px;

    &:hover {
        background-color: #ddd;
        cursor: pointer;
    }
`

export const ImageContainer = styled.div `
    width: 100%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InforContainer = styled.div `
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
`

export const CompanyName = styled.h3 `
    font-size: .8rem;
    font-weight: 700;
    color: #000;
    margin-bottom:7px;
`

export const CompanyAddress = styled.p `
    font-size: .5rem;
    font-weight: 100;
    color: #000;
    padding: 0px 5px
`

export const LogoImage = styled.img `
    width: 90%;
    height: 90%;
    border-radius: 10px;
`