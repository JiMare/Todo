import styled from 'styled-components';

type Props = {
  border?: boolean;
  bg?: string;
  isAction?: boolean;
};

export const IconButton = styled.button<Props>`
  height: 2.75rem;
  width: 2.75rem;
  background-color: ${({ bg }) => bg ?? 'inherit'};
  border: ${({ border }) => (border ? '2px solid var(--color-outline)' : 'none')};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isAction }) => (isAction ? 'pointer' : 'arrow')};
`;
