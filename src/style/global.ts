import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: ${({ theme }) => theme.FONTS.DEFAULT};
    font-size: 1.4rem;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-size: 3rem;
    font-weight: 600;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
`;