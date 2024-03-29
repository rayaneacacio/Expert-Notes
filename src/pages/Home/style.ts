import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 5% 11%;

  > img {
    width: 12.4rem;
    height: 2.3rem;
  }

  > input {
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3rem;
    font-weight: 600;
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }

  .border {
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
    width: 100%;
    height: 1px;
  }

  .newNote {
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 2.4rem;
    height: 25rem;
    padding: 2rem;
    border-radius: 6px;

    display: flex;
    flex-direction: column;

    &:hover {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.BLUE_500};
    } 

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.GREEN};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.COLORS.GREEN};
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.4rem;
  }

  @media(max-width: 1000px) {
    main {
      grid-template-columns: 1fr 1fr;
    }

    dialog > div {
      width: 80%;
    }
  }

  @media(max-width: 650px) {
    main {
      grid-template-columns: 1fr;
    }

    dialog > div {
      width: 100%;
      height: 100%;
    }
  }
`;