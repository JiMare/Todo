import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 2rem;
`;

export const Text = styled.span<{ bold?: boolean; secondary?: boolean; maxWidth?: string }>`
  font-size: 0.875rem;
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  line-height: 1.25rem;
  color: ${({ secondary }) => (secondary ? 'var(--color-secondary-txt)' : 'inherit')};
  ${({ maxWidth }) =>
    maxWidth &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${maxWidth};
  `}
`;

export const SubTitle = styled.span<{ small?: boolean; secondary?: boolean; isAction?: boolean }>`
  font-weight: 800;
  font-size: ${({ small }) => (small ? '0.625rem' : '0.75rem')};
  line-height: ${({ small }) => (small ? '0.875rem' : '0.75rem')};
  text-transform: uppercase;
  color: ${({ secondary }) => (secondary ? 'var(--color-secondary-txt)' : 'inherit')};
  letter-spacing: 0.15em;
  cursor: ${({ isAction }) => (isAction ? 'pointer' : 'arrow')};
`;
