import styled from 'styled-components';

type Props = {
  isGridView?: boolean;
};

export const GreyBox = styled.div<Props>`
  background-color: var(--color-secondary-bg);
  padding-block: var(--spacing-sm);
  padding-inline: var(--spacing-md);
  border-radius: 12px;
  width: ${({ isGridView }) => (isGridView ? 'calc(50% - (var(--spacing-md) / 2) )' : '100%')};
  height: ${({ isGridView }) => (isGridView ? ' 8.75rem' : 'auto')};
`;
