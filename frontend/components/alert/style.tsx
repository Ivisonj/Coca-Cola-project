import styled from 'styled-components'

export const Container = styled.div `
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(215,215,215,0.07344187675070024) 50%, rgba(55,55,55,1) 100%, rgba(210,200,200,1) 100%, rgba(0,212,255,1) 100%);
    display: ${props => props.display};
    align-items: center;
    justify-content: center;
    z-index: 3;
`

export const AlertContainer = styled.div `
    width: 390px;
    height: 190px;
    border-radius: 10px;
    background-color: #fff;
`

export const Raw = styled.aside `
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
` 

export const Icon = styled.aside `
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AlertButton = styled.button `
    width: 70px;
    height: 40px;
    padding: 10px;
    margin: 10px;
    color: #fff;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s all ease-in-out;   

    &:hover {
            transform: scale(1.1);   
    }

`

export const Text = styled.h1 `
    font-size: .7rem;
    font-weight: bold;
`