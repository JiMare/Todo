import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Flex } from '@/components/layout/Flext';
import { Page } from '@/components/layout/Page';
import { Tab, Tabs } from '@/components/ui/Tabs';
import { Text, Title } from '@/components/ui/Typography';
import api from '@/modules/api/api';
import { useQuery } from 'react-query';
import { TaskBox } from '@/modules/TaskBox';
import { StatusType, Task, UserType } from '@/modules/api/apiTypes';
import { IconButton } from '@/components/ui/IconButton';
import { ReactComponent as IconGrid } from '@/components/assets/icons/grid-01.svg';
import { ReactComponent as IconFilter } from '@/components/assets/icons/filter-lines.svg';
import { ReactComponent as IconFilterRed } from '@/components/assets/icons/filter-lines-red.svg';
import { ReactComponent as IconHorizontal } from '@/components/assets/icons/distribute-spacing-horizontal.svg';
import { ReactComponent as IconVertical } from '@/components/assets/icons/distribute-spacing-vertical.svg';
import { ReactComponent as IconCheck } from '@/components/assets/icons/check.svg';
import { FilterModal } from '@/modules/dialogs/FilterModal';
import { ScrollableBox } from '@/components/layout/ScrollableBox';

export const DashboardPage: React.FC = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [activeTab, setActiveTab] = useState<StatusType>('backlog');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredUserIds, setFilteredUserIds] = useState<UserType['id'][]>([]);

  const { data } = useQuery(['tasks'], () => api.getTasks());

  const filteredData = filteredUserIds.length > 0 ? data?.data?.filter((task: Task) => filteredUserIds.includes(task.user.id)) : data?.data;
  const activeTabData = filteredData?.filter((task: Task) => task.status === activeTab);

  const onUpdate = (id: UserType['id']) => {
    setFilteredUserIds((prev) => (filteredUserIds.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]));
  };

  const resetFilter = () => {
    setFilteredUserIds([]);
  };

  return (
    <>
      <Page>
        <Container>
          <Flex justifyContent="space-between" mt="5rem" mb="2rem">
            <IconButton border>
              <IconGrid />
            </IconButton>
            <Flex gap="0.5rem">
              <IconButton bg="var(--color-secondary-bg)" onClick={() => setIsGridView(!isGridView)}>
                {isGridView ? <IconHorizontal /> : <IconVertical />}
              </IconButton>
              <IconButton bg="var(--color-secondary-bg)" onClick={() => setIsFilterModalOpen(true)}>
                {filteredUserIds.length > 0 ? <IconFilterRed /> : <IconFilter />}
              </IconButton>
            </Flex>
          </Flex>
          <Flex justifyContent="flex-start" flexDirection="column" gap="0.8rem">
            <Title>Dashboard</Title>
            <Text secondary>All of your team's work in one place.</Text>
          </Flex>
          <Tabs mt="3rem">
            <Tab title="Backlog" isActive={activeTab === 'backlog'} onClick={() => setActiveTab('backlog')} />
            <Tab title="Doing" isActive={activeTab === 'in_progress'} onClick={() => setActiveTab('in_progress')} />
            <Tab title="Done" isActive={activeTab === 'done'} onClick={() => setActiveTab('done')} />
          </Tabs>
          {activeTabData.length > 0 ? (
            <ScrollableBox mt="3rem" height="19rem" isGridView={isGridView}>
              {activeTabData?.map((task: Task) => <TaskBox key={task.id} task={task} isGridView={isGridView} />)}
            </ScrollableBox>
          ) : (
            <Flex alignItems="center" mt="6rem" flexDirection="column" gap="1rem">
              <IconButton bg="var(--color-secondary-bg)">
                <IconCheck />
              </IconButton>
              <Text secondary>All done!</Text>
            </Flex>
          )}
        </Container>
      </Page>
      {isFilterModalOpen && (
        <FilterModal
          onClose={() => setIsFilterModalOpen(false)}
          filteredUserIds={filteredUserIds}
          onReset={resetFilter}
          onUpdate={onUpdate}
          filteredDataLength={filteredData.length}
        />
      )}
    </>
  );
};
