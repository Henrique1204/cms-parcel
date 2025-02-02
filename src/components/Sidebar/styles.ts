import styled from 'styled-components';

export const Container = styled.aside`
  height: calc(100% + 2rem);
  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.colors.neutral.lighter};
  box-shadow: 1px 11px 10px ${({ theme }) => theme.colors.secondary.lighter};

  grid-area: sidebar;

  position: relative;
  z-index: 1;
`;

export const GroupNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GroupButton = styled.button<{ isActive?: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.secondary};
`;
