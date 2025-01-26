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
  flex-direction: ${({isGridView}) => isGridView ? 'row' : 'column'};
  flex-wrap: wrap;
  gap: var(--spacing-md);
  max-height: height;
  overflow-y: auto;
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
