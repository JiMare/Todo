import styled from 'styled-components';
import {
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  color,
  ColorProps,
} from 'styled-system';

type Props = {
  secondary?: boolean;
  full?: boolean;
};

export const Button = styled.button<Props & SpaceProps & GridProps & FlexboxProps & LayoutProps & TypographyProps & ColorProps>`
  background-color: ${({ secondary }) => (secondary ? 'inherit' : 'var(--color-brand)')};
  color: ${({ secondary }) => (secondary ? 'var(--color-primary-txt)' : 'var(--color-white)')};
  outline: none;
  border: 2px solid;
  border-color: ${({ secondary }) => (secondary ? 'var(--color-outline)' : 'var(--color-brand)')};
  height: 3.125rem;
  border-radius: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  padding-inline: var(--spacing-lg);
  font-weight: 800;
  font-size: 0.75rem;
  line-height: 0.75rem;
  letter-spacing: 0.15em;
  width: ${(props) => (props.full ? '100%' : null)};
  &:disabled {
    opacity: 30%;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    transition: var(--transition);
    scale: 1.1;
  }
  ${space};
  ${grid};
  ${flexbox};
  ${layout};
  ${color};
  ${typography};
`;
