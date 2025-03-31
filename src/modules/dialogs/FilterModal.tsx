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
import { ScrollableBox } from '@/components/layout/ScrollableBox';
import { Button } from '@/components/ui/Button';

type Props = {
  onClose: () => void;
  filteredUserIds: UserType['id'][];
  onUpdate: (id: UserType['id']) => void;
  onReset: () => void;
  filteredDataLength: number;
};

export const FilterModal: React.FC<Props> = ({ onClose, filteredUserIds, onUpdate, onReset, filteredDataLength }) => {
  const { data } = useQuery(['users'], () => api.getUsers());

  return (
    <Modal onClose={onClose}>
      <TopLine />
      <Flex justifyContent="space-between" alignItems="center" mb="2rem" mt="2rem">
        <IconButton border>
          <IconFilter />
        </IconButton>
        <SubTitle secondary onClick={onClose} isAction>
          Close
        </SubTitle>
      </Flex>
      <Flex justifyContent="flex-start" flexDirection="column" gap="0.8rem">
        <Title>Filters</Title>
        <Text secondary>Filter your tasks to maximize effectiveness.</Text>
      </Flex>
      <ScrollableBox mt="3rem" height="24rem">
        {data?.data?.map((user: UserType) => (
          <UserBox key={user.id} user={user} isActive={filteredUserIds.includes(user.id)} onUpdate={onUpdate} />
        ))}
      </ScrollableBox>
      <Flex justifyContent="space-between" flexDirection={['column', 'row']} gap="1rem" mt="2rem">
        <Button full secondary onClick={onReset}>
          Reset
        </Button>
        <Button full onClick={onClose}>
          Show ({filteredDataLength})
        </Button>
      </Flex>
    </Modal>
  );
};
