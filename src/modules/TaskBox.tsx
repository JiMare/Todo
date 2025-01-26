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
  isGridView: boolean;
};

export const TaskBox: React.FC<Props> = ({ task, isGridView }) => {
  const user = task.user;
  return (
    <GreyBox isGridView={isGridView}>
      <Flex justifyContent="space-between">
        <Flex gap="1rem" flexDirection={isGridView ? 'column' : 'row'}>
          <Flex justifyContent="space-between" alignItems="center">
            <IconButton border>{task.status === 'done' ? <IconFileDone /> : <IconFile />}</IconButton>
            {isGridView && <Avatar initials={`${user.first_name.charAt(0)}${user.last_name.charAt(0)}`} />}
          </Flex>
          <Flex flexDirection="column">
            <Text bold maxWidth={isGridView ? '7.1875rem' : '10.75rem'}>
              {task.name}
            </Text>
            <Text secondary>{task.estimation}</Text>
          </Flex>
        </Flex>
        {!isGridView && <Avatar initials={`${user.first_name.charAt(0)}${user.last_name.charAt(0)}`} />}
      </Flex>
    </GreyBox>
  );
};
