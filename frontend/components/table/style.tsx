import styled from "styled-components"

export const TableContant = styled.table `
    width: 90%;
    height: auto;
    border-radius: 20px;
    overflow: hidden;
`
export const Header = styled.thead `
    border-radius: 10px;
    background: linear-gradient(to right, red, #8B0000);

    font-size: 1rem;
    color: #fff;
`

export const Body = styled.tbody `
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
`

export const TableRow = styled.tr `
    &.DarkRed {
        background-color: #8B0000;
    }

    &.Red {
        background-color: #FF0000;
    }
`

export const TableHeader = styled.th `
    text-align: left;
    padding: 20px;
`

export const TableData = styled.td `
    text-align: left;
    padding: 20px;
`
