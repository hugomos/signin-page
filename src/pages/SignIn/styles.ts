import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-content: center;

  img {
    display: none;

    width: 100%;
    max-height: 100vh;

    object-fit: cover;
  }

  main {
    padding: 2.4rem;

    >span{
      display: flex;
      align-items: center;

      gap: 0.5rem;
    }
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;

    img{
      display: block;
    }

    main {
      padding: 3rem 4.6rem;
    }

  }
`

export const WelcomeMessage = styled.h1`
  font-size: 2.4rem;
  line-height: 3.4rem;

  margin: 0 0 3.6rem;

  text-align: center;

  @media screen and (min-width: 800px) {
    font-size: 3rem;
    line-height: 3.8rem;

    text-align: start;
  }
`