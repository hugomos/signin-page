import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.button<Props>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  border: none;
  border-radius: 5px;

  margin: 1.6rem 0;
  padding: 1rem;

  transition: all 0.1s ease-in-out;

  background-color: ${({ theme, variant }) => {
    return variant === 'primary' ? theme.colors.gray900 : theme.colors.white;
  }};

  color: ${({ theme, variant }) => {
    return variant === 'primary' ? theme.colors.gray100 : theme.colors.gray900;
  }};

  &:hover{
    background-color: ${({ theme, variant }) => {
    return variant === 'primary' ? theme.colors.gray700 : theme.colors.gray200;
  }};
  }
`