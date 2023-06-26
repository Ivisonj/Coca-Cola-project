import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const StyleInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid red;
  outline: none;
  background: transparent;
`;

export const StyleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  pointer-events: none;
  transition: 0.5s;

  ${InputContainer}:focus-within &,
  ${InputContainer} input:valid ~ & {
    top: -20px;
    left: 0;
    color: red;
    font-size: 12px;
  }
`;
