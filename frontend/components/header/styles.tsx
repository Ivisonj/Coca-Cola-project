 import styled from "styled-components"

export const Container = styled.div `
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: #fff;
    // box-shadow: 0px  2px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    flex-direction: row;
    z-index: 2;
`

export const Row = styled.div `
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
`
