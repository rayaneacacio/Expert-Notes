import styled from "styled-components";

export const Container = styled.dialog`
  form {
    height: 100%;
  }

  form > div {
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
    line-height: 2.4rem;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    outline: 0;
    resize: none;
  }

  .buttonSave {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.DARK_GREEN};
    font-weight: 600;
  }

  .formAudioNote {
    display: flex;
    width: 100%;
    flex-direction: column;

    img {
      animation: recordingAnimation 1s ease infinite;
    }
  }
`;