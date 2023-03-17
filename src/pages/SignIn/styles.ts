import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  /* place-content: center; */

  >div {
    display: none;

    padding: 1rem;
    border-radius: 5px;


    img {
      width: 100%;

      border-radius: 5px;

      justify-self: center;
      object-fit: cover;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 2.4rem;

    span {
      display: flex;
      align-items: center;

      gap: 0.5rem;
    }
  }

  @media screen and (min-width: 835px) {
    grid-template-columns: 1fr 1fr;

    div{
      display: flex;
    }

    main {
      padding: 3rem 6rem;
    }

  }
`

export const WelcomeMessage = styled.h1`
  font-size: 2.4rem;
  line-height: 3.4rem;

  margin: 0 0 3.6rem;

  text-align: center;

  @media screen and (min-width: 835px) {
    font-size: 3rem;
    line-height: 3.8rem;

    text-align: start;
  }
`