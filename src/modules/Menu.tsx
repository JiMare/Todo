import React from 'react';
import { Flex } from '@/components/layout/Flext';
import { IconButton } from '@/components/ui/IconButton';
import { ReactComponent as IconGrid } from '@/components/assets/icons/grid-01.svg';
import { ReactComponent as IconPlus } from '@/components/assets/icons/plus.svg';
import { ReactComponent as IconUser } from '@/components/assets/icons/user-01.svg';
import { ReactComponent as IconGridGrey } from '@/components/assets/icons/grid-01-grey.svg';
import { ReactComponent as IconUserGrey } from '@/components/assets/icons/user-01-grey.svg';
import { NavLink } from 'react-router-dom';
import { MenuWrapper } from '@/components/layout/MenuWrapper';

export const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <Flex justifyContent="space-around" pt="2rem" borderTop mt="5rem">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          {({ isActive }) => (
            <IconButton bg={isActive ? 'var(--color-secondary-bg)' : 'transparent'} isAction>
              {isActive ? <IconGrid /> : <IconGridGrey />}
            </IconButton>
          )}
        </NavLink>
        <IconButton bg="var(--color-brand)" isAction>
          <IconPlus />
        </IconButton>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
          {({ isActive }) => (
            <IconButton bg={isActive ? 'var(--color-secondary-bg)' : 'transparent'} isAction>
              {isActive ? <IconUser /> : <IconUserGrey />}
            </IconButton>
          )}
        </NavLink>
      </Flex>
    </MenuWrapper>
  );
};
