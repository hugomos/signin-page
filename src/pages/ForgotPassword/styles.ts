import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;

  >div{
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.6rem;

    padding: 0 0 2.4rem;

    text-align: center;
  }

  >form {
    width: 100%;
    max-width: 35rem;
  }

  >span{
    display: flex;
    align-items: center;
    gap: 0.8rem;

    padding:  0 0 1.6rem
  }
`