import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 2rem;
`;

export const Text = styled.span<{ bold?: boolean; secondary?: boolean }>`
  font-size: 0.875rem;
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  line-height: 1.25rem;
  color: ${({ secondary }) => (secondary ? 'var(--color-secondary-txt)' : 'inherit')};
`;
