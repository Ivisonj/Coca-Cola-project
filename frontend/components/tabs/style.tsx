import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 45px;
    display: flex;  
`

export const Content = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.selected {
        border-bottom: solid 3px red;
    }

    &:hover {
        background-color: #ddd;
        cursor: pointer;
    }
`

export const Text = styled.h1 `
    margin-left: 7px;
    font-size: 1rem;
    font-weight: 500;
    color: red;
`

