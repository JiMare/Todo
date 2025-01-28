import styled from 'styled-components';

type Props = {
  isGridView?: boolean;
  isAction?: boolean;
};

export const GreyBox = styled.div<Props>`
  background-color: var(--color-secondary-bg);
  padding-block: var(--spacing-sm);
  padding-inline: var(--spacing-md);
  border-radius: 12px;
  width: ${({ isGridView }) => (isGridView ? 'calc(50% - (var(--spacing-md) / 2) )' : '100%')};
  height: ${({ isGridView }) => (isGridView ? ' 8.75rem' : 'auto')};
  cursor: ${({ isAction }) => (isAction ? 'pointer' : 'arrow')};
  &:hover {
    opacity: ${({ isAction }) => (isAction ? '0.7' : '1')};
    transition: var(--transition);
  }
`;
