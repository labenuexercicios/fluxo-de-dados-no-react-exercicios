import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;

  h1 {
    padding: 16px;
    margin: 32px 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 18px;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom-color: #555;
  }
`;

export const Button = styled.button`
  background-color: #555;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  &:active {
    filter: brightness(125%)
  }
`;