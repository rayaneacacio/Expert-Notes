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

  .border {
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
    width: 100%;
    height: 1px;
  }

  .newNote {
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
    line-height: 2.4rem;
    width: 34.8rem;
    height: 25rem;
    padding: 2rem;
    border-radius: 6px;
    position: relative;
    /* flex: 1; */
  }

  main {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;

    > div, button {
      flex-grow: 1;
      /* flex: 1; */
    }

    > :last-child {
      /* flex-grow: 0.03; */
    }
  }
`;