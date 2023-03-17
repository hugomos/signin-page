import styled from "styled-components";

export const Container = styled.a`

  font-size: 1.4rem;
  line-height: 2.6rem;

  color: ${({ theme }) => theme.colors.gray700}

  >span{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`