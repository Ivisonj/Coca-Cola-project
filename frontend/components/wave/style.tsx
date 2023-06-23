import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
`;

const leftWaveAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
`;

const rightWaveAnimation = keyframes`
    0% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

export const WaveContainer = styled.div`
    position: relative;
    width: 1400px;
    height: 1400px;
    background-color: red;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;

    &::before {
        position: absolute;
        content: '';
        width: 230%;
        height: 200%;
        background-color: #f5f5f5;
        top: -113%;
        border-radius: 40%;
    }

    &.left-wave-animation::before {
        animation: ${leftWaveAnimation} 2s;
    }

    &.right-wave-animation::before {
        animation: ${rightWaveAnimation} 2s;
    }
`;

export const Button = styled.button`
    position: absolute;
    z-index: 5;
    margin: 20px;
`;
