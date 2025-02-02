import styled from 'styled-components';

export const Container = styled.main`
  grid-area: content;
  padding: 2rem;

  max-width: 600px;
`;

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.darker};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.neutral.light};
`;
