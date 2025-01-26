import React from 'react';
import { GreyBox } from '@/components/layout/GreyBox';
import { UserType } from './api/apiTypes';
import { Text } from '@/components/ui/Typography';
import { Switch } from '@/components/ui/Switch';
import { Flex } from '@/components/layout/Flext';

type Props = {
  user: UserType;
  isActive: boolean;
  onUpdate: (id: UserType['id']) => void;
};

export const UserBox: React.FC<Props> = ({ user, isActive, onUpdate }) => {
  return (
    <GreyBox>
      <Flex justifyContent="space-between" alignItems="center">
        <Text bold maxWidth="10.75rem" secondary={!isActive}>
          {`@${user.first_name.toLowerCase()}${user.last_name.toLowerCase()}`}
        </Text>
        <Switch checked={isActive} onChange={() => onUpdate(user.id)} />
      </Flex>
    </GreyBox>
  );
};
