import styled from "styled-components"

export const Container = styled.div `
    width: 320px;
    height: 200px;
    margin: 50px 50px;
    display: flex;
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(71,4,4,1) 0%, rgba(241,50,50,1) 100%, rgba(55,55,55,1) 100%, rgba(210,200,200,1) 100%, rgba(200,53,53,1) 100%, rgba(255,90,90,1) 100%);
`

export const LeftColumn = styled.aside `
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RightColumn = styled.aside `
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 0px 15px 15px;
    border-left: 1px solid transparent; 
    border-image: linear-gradient(to top, rgba(120, 120, 120, 0), 
        rgba(120, 120, 120, 0.75) 30%,
        rgba(120, 120, 120, 0)); 
    border-image-slice: 1; 
`
export const ProductImage = styled.img `
    width: 100%;
    height: 80%;
`

export const Title = styled.h1 `
    font-size: .7rem;
    font-weight: 700;
    color: #fff;

    margin: 5px 0px;
`
export const Information = styled.h3 `
    font-size: .5rem;
    font-weight: 400;
    color: #fff;

    margin: 8px 0px;
`