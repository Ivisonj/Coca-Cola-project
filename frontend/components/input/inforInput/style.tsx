import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

export const StyleInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  border: none;
  border-bottom: 1px solid red;
  outline: none;
  background: transparent;
`;

export const StyleLabel = styled.label`
  font-size: 1rem;
  color: red;
`;
