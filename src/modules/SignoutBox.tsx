import React from 'react';
import { GreyBox } from '@/components/layout/GreyBox';
import { Flex } from '@/components/layout/Flext';
import { Text } from '@/components/ui/Typography';
import { ReactComponent as IconChevron } from '@/components/assets/icons/chevron-right.svg';
import { useAuthStore } from '@/stores/authStore';
import api from './api/api';

export const SignoutBox: React.FC = () => {
  const logOut = useAuthStore.getState().logOut;

  const onLogOut = async () => {
    await api.logout();
    logOut();
  };

  return (
    <GreyBox onClick={onLogOut} isAction>
      <Flex justifyContent="space-between" alignItems="center">
        <Text bold maxWidth="10.75rem" secondary>
          Sign out
        </Text>
        <IconChevron />
      </Flex>
    </GreyBox>
  );
};
