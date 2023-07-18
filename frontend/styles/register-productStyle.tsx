import styled from 'styled-components'

export const Container = styled.div `
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    // background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormBox = styled.div `
    width: 90vw;
    height: 85vh;
    background-color: #fff;
    border-radius: 15px;
    margin-top: 60px; 
    padding: 30px;
    box-shadow: 0px 5px 5px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.h1 `
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 30px;
    color: #000
`