import styled from 'styled-components';
import { typography, TypographyProps, space, SpaceProps } from 'styled-system';

type TabProps = TypographyProps & {
  title: string;
  isActive?: boolean;
  onClick: () => void;
};

export const Tab: React.FC<TabProps> = ({ title, isActive, onClick, ...props }) => (
  <StyledTab title={title} isActive={isActive} data-text={title} onClick={onClick} {...props}>
    <span>{title}</span>
  </StyledTab>
);

const StyledTab = styled.div<TabProps>`
  position: relative;
  font-size: 0.875rem;
  padding-bottom: 0.75rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: ${(props) => (props.isActive ? 'var(--color-brand)' : 'var(--color-secondary-txt)')};
  height: 2rem;
  width: 100%;
  cursor: pointer;
  transition: var(--transition);
  span {
    display: block;
    text-align: center;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover,
  &:focus-visible {
    color: var(--color-brand);
    font-weight: 700;
  }
  &:after {
    position: absolute;
    content: ${(props) => (props.isActive ? '""' : null)};
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.125rem;
    background: var(--color-brand);
  }
  ${typography};
`;

type TabsProps = SpaceProps & {
  children?: React.ReactNode;
};

export const Tabs: React.FC<TabsProps> = ({ children, ...props }) => (
  <StyledTabs {...props}>
    <TabsWrapper>{children}</TabsWrapper>
  </StyledTabs>
);

export const StyledTabs = styled.div<TabsProps>`
  position: relative;
  ${space}
`;

export const TabsWrapper = styled.div<TabsProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: auto;
`;
