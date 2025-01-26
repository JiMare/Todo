import React from 'react';
import { TopLine } from '@/components/layout/Container';
import { Modal } from '@/components/layout/Modal';
import { IconButton } from '@/components/ui/IconButton';
import { ReactComponent as IconFilter } from '@/components/assets/icons/filter-lines.svg';
import { SubTitle, Text, Title } from '@/components/ui/Typography';
import { Flex } from '@/components/layout/Flext';
import api from '../api/api';
import { useQuery } from 'react-query';
import { UserBox } from '../UserBox';
import { UserType } from '../api/apiTypes';

type Props = {
  onClose: () => void;
  filteredUserIds: UserType['id'][];
  onUpdate: (id: UserType['id']) => void;
  onReset: () => void;
};

export const FilterModal: React.FC<Props> = ({ onClose, filteredUserIds, onUpdate, onReset }) => {
  const { data } = useQuery(['users'], () => api.getUsers());

  return (
    <Modal onClose={onClose}>
      <TopLine />
      <Flex justifyContent="space-between" alignItems="center" mb="2rem" mt="2rem">
        <IconButton border>
          <IconFilter />
        </IconButton>
        <SubTitle secondary onClick={onClose}>
          Close
        </SubTitle>
      </Flex>
      <Flex justifyContent="flex-start" flexDirection="column" gap="0.8rem">
        <Title>Filters</Title>
        <Text secondary>Filter your tasks to maximize effectiveness.</Text>
      </Flex>
      <Flex mt="3rem" flexDirection="column" gap="var(--spacing-md)">
        {data?.data?.map((user: UserType) => (
          <UserBox key={user.id} user={user} isActive={filteredUserIds.includes(user.id)} onUpdate={onUpdate} />
        ))}
      </Flex>
    </Modal>
  );
};
