import styled from 'styled-components';

export const FormEl = styled.form`
  padding: ${p => p.theme.space[4]}px;
  display: grid;
  gap: 10px;
  border: ${p => p.theme.borders.medium};
  border-color: ${p => p.theme.colors.text};
`;

export const LabelEl = styled.label`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
  flex-direction: column;
  max-width: 200px;
  font-size: ${p => p.theme.fontSizes.md};
`;

export const LabelFilterEl = styled.label`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const ButtonEl = styled.button`
  width: 100px;
  margin-left: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.theadBgColor};
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.blue};
  }
`;
