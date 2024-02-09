import styled from "styled-components";

export const Container = styled.dialog`
  height: 100%;

  > div {
    height: calc(100% - 10rem);
  }

  .choseAudioOrTextDiv {
    display: flex;
    gap: 5px;
    padding-left: 2rem;

    p {
      padding: 0;
    }

    button {
      background: none;
      color: ${({ theme }) => theme.COLORS.GREEN};
    }
  }

  textarea {
    background: none;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: ${({ theme }) => theme.FONTS.DEFAULT};
    line-height: 2.4rem;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    outline: 0;
    resize: none;
    display: none;
  }

  .formTextNote .lastButton {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.DARK_GREEN};
    font-weight: 600;
  }

  .formAudioNote {
    display: none;
  }
`;