import styled from 'styled-components';

export const LabelInputContainer = styled.div`
  margin: 10px 0;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;

  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.darker};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.neutral.light};
`;
