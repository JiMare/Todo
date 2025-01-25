import { Container } from '@/components/layout/Container';
import { Flex } from '@/components/layout/Flext';
import { Page } from '@/components/layout/Page';
import { TaskBox } from '@/components/layout/TaskBox';
import { Tab, Tabs } from '@/components/ui/Tabs';
import { Text, Title } from '@/components/ui/Typography';
import api from '@/modules/api/api';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('backlog');

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
          {data.data?.filter((task) => task.status === activeTab)?.map((task) => <TaskBox></TaskBox>)}
        </Flex>
      </Container>
    </Page>
  );
};
