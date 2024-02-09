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
    overflow-x: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      background: transparent;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.BLUE_500};
      border-radius: 6px;
    }
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

  button {
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: 1.4rem;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.8);
  }

  .buttonIcon {
    background-color: ${({ theme }) => theme.COLORS.BLUE_900};
    color: ${({ theme }) => theme.COLORS.BLUE_500};
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    top: 0;
    right: 0;
    border-top-right-radius:6px;
  }

  dialog {
    background: rgba(8, 8, 8, 0.64);
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: 2;

    h2 {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    h2, p {
      padding: 0 2rem;
    }

    > div {
      background-color: ${({ theme }) => theme.COLORS.BLUE_700};
      color: ${({ theme }) => theme.COLORS.BLUE};
      width: 65%;
      height: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 6px;
      padding-top: 2rem;
    }

    .lastButton {
      background-color: ${({ theme }) => theme.COLORS.BLUE_900};
      width: 100%;
      height: 4.6rem;
      position: absolute;
      bottom: 0;
      border-radius: 0 0 6px 6px;

      p {
        display: inline;
        padding: 0 0 0 8px;
      }

      span {
        color: ${({ theme }) => theme.COLORS.RED};
      }
    }
  }
`;