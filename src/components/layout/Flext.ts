import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps, layout, LayoutProps, grid, GridProps } from 'styled-system';

type ContainerProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  GridProps & {
    children: React.ReactNode;
    gap?: number | string;
    wrap?: boolean;
    className?: string;
    width?: string;
    borderTop?: boolean;
  };

export const Flex = styled.div<ContainerProps>`
  display: flex;
  gap: ${(props) => (typeof props.gap === 'number' ? `${props.gap}px` : typeof props.gap === 'string' ? props.gap : 0)};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : null)};
  width: ${(props) => (props.width ? props.width : 'auto')};
  border-top: ${(props) => (props.borderTop ? '2px solid var(--color-outline)' : 'none')};
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
`;
