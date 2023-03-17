import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 0.5rem;

  margin: 1.6rem 0;
`

export const Label = styled.label`
  font-weight: 700;
`

export const DefaultInput = styled.input`
  padding: 0.8rem 1rem;

  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.gray800};
  
  border-radius: 5px;

  background-color: transparent

  /* background-color: ${({ theme }) => theme.colors.gray200}; */
`