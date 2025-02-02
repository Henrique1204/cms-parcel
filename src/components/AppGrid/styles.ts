import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  background: ${({ theme }) => theme.colors.neutral.darker};

  display: grid;
  grid-template-areas:
    'header header'
    'sidebar content';

  grid-template-columns: minmax(auto, 320px) 1fr;
  grid-template-rows: 80px 1fr;

  ${({ theme }) =>
    theme.mixins.scrollbar({
      thumb: theme.colors.secondary.main,
      thumbHover: theme.colors.secondary.dark,
    })};
`;
