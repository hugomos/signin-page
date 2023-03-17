import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;

    color: ${({ theme }) => theme.colors.gray900};
    background-color: ${({ theme }) => theme.colors.gray100};
  }

  input, button {
    font-size: 1.4rem;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
  }

  a {
    color: inherit;
  }

  button {
    cursor: pointer;
  }

`