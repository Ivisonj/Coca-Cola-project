'use client'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        font-family: 'Open Sans';
    }

    body {
        background-color: #f5f5f5;
        color: #000;
        font-family: 'Open Sans';
        display: flex;
        flex-direction: column;
    }
`