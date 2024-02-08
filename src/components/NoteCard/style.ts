import styled from "styled-components";

export const Container = styled.button`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
  background-color: ${({ theme }) => theme.COLORS.BLUE_900};
  text-align: left;
  line-height: 2.4rem;
  width: 34.8rem;
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
`;