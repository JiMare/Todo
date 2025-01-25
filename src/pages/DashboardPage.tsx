import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Flex } from '@/components/layout/Flext';
import { Page } from '@/components/layout/Page';
import { Tab, Tabs } from '@/components/ui/Tabs';
import { Text, Title } from '@/components/ui/Typography';
import api from '@/modules/api/api';
import { useQuery } from 'react-query';
import { TaskBox } from '@/modules/TaskBox';
import { StatusType, Task } from '@/modules/api/apiTypes';

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StatusType>('backlog');

  const { data } = useQuery(['tasks'], () => api.getTasks());

  return (
    <Page>
      <Container>
        <Flex justifyContent="flex-start" flexDirection="column" gap="0.8rem">
          <Title>Dashboard</Title>
          <Text secondary>All of your team's work in one place.</Text>
        </Flex>
        <Tabs mt="3rem">
          <Tab title="Backlog" isActive={activeTab === 'backlog'} onClick={() => setActiveTab('backlog')} />
          <Tab title="Doing" isActive={activeTab === 'in_progress'} onClick={() => setActiveTab('in_progress')} />
          <Tab title="Done" isActive={activeTab === 'done'} onClick={() => setActiveTab('done')} />
        </Tabs>
        <Flex mt="3rem" flexDirection="column" gap="var(--spacing-md)">
          {data?.data?.filter((task: Task) => task.status === activeTab)?.map((task: Task) => <TaskBox key={task.id} task={task} />)}
        </Flex>
      </Container>
    </Page>
  );
};
