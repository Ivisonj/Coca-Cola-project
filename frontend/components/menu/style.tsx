import styled from 'styled-components'

export const Conatiner = styled.div `
    width: 15%;
    height: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // background-color: blue;
    transition: 0.5s all ease-in-out;

    &.showMenu {
        width: 100%;
        transition: 0.5s all ease-in-out;
    }
`

export const Avatar = styled.img `
    width: 55px;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: solid 1px #000;
    cursor: pointer;
`

export const MenuIcon = styled.aside `
    width: 55px;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const MenuConatiner = styled.ul `
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const MenuOption = styled.li `
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s all ease-in-out;

    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: red;
    
    &:hover {
        background-color: #ddd;
    }
`