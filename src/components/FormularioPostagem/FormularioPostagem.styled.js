import styled from 'styled-components';

export const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.div`
    width: 40vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`   

export const Input = styled.input`
    padding: 8px;
    margin-left: 16px;
`

export const StyledLabel = styled.label`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`