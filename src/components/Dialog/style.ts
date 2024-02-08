import styled from "styled-components";

export const Container = styled.dialog`
  background: rgba(8, 8, 8, 0.64);
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;

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
`;

export const NewNoteDiv = styled.div`
  div {
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

  .lastButton {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.DARK_GREEN};
    font-weight: 600;
  }
`;