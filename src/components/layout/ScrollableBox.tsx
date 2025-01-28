import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps, layout, LayoutProps, grid, GridProps } from 'styled-system';

type Props = {
  height: string;
  isGridView?: boolean;
} & FlexboxProps &
  SpaceProps &
  LayoutProps &
  GridProps;

export const ScrollableBox = styled.div<Props>`
  display: flex;
  flex-direction: ${({ isGridView }) => (isGridView ? 'row' : 'column')};
  flex-wrap: ${({ isGridView }) => (isGridView ? 'wrap' : 'no-wrap')};
  gap: var(--spacing-md);
  max-height: height;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
`;
