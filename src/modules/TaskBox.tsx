import React from 'react';
import { GreyBox } from '@/components/layout/GreyBox';
import { ReactComponent as IconFile } from '@/components/assets/icons/file.svg';
import { ReactComponent as IconFileDone } from '@/components/assets/icons/file-check.svg';
import { IconButton } from '@/components/ui/IconButton';
import { Task } from './api/apiTypes';
import { Flex } from '@/components/layout/Flext';
import { Text } from '@/components/ui/Typography';
import { Avatar } from '@/components/ui/Avatar';

type Props = {
  task: Task;
};

export const TaskBox: React.FC<Props> = ({ task }) => {
   const user = task.user; 
  return (
    <GreyBox>
      <Flex justifyContent="space-between">
        <Flex gap="1rem">
          <IconButton border>{task.status === 'done' ? <IconFileDone /> : <IconFile />}</IconButton>
          <Flex flexDirection="column">
            <Text bold maxWidth='10.75rem'>{task.name}</Text>
            <Text secondary>{task.estimation}</Text>
          </Flex>
        </Flex>
        <Avatar initials={`${user.first_name.charAt(0)}${user.last_name.charAt(0)}`} />
      </Flex>
    </GreyBox>
  );
};
