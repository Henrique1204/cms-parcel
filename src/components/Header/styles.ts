import styled from 'styled-components';

export const Container = styled.header`
  padding: 1rem 2rem;

  background-color: ${({ theme }) => theme.colors.neutral.lighter};
  box-shadow: 0 1px 10px ${({ theme }) => theme.colors.secondary.lighter};

  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-area: header;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary.main};

  &::after {
    content: ' CMS';
    color: ${({ theme }) => theme.colors.primary.main};
    text-shadow: ${({ theme }) => `0.5px 0.5px ${theme.colors.secondary.main}`};
  }
`;

export const Button = styled.button`
  padding: 0.125rem 0.75rem;
  border: 2px solid;
  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.secondary.main};

  ${({ theme }) =>
    theme.mixins.hover({
      color: theme.colors.primary.main,
    })}
`;
