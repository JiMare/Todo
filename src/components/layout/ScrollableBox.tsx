import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps, layout, LayoutProps, grid, GridProps } from 'styled-system';

type Props = {
  height: string;
} & FlexboxProps &
  SpaceProps &
  LayoutProps &
  GridProps;

export const ScrollableBox = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-height: height;
  overflow-y: auto;
  padding-right: 0.5rem;
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
