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

const waveAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
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
        animation: ${waveAnimation} 12s;
    }
`;

