import { Container } from '@/components/layout/Container';
import { Flex } from '@/components/layout/Flext';
import { Page } from '@/components/layout/Page';
import { Avatar } from '@/components/ui/Avatar';
import { Text, Title } from '@/components/ui/Typography';
import { Menu } from '@/modules/Menu';
import React from 'react';

export const ProfilePage: React.FC = () => {
  return (
    <Page>
      <Container>
        <Flex justifyContent="flex-start" flexDirection="column" gap="0.8rem" mt="3rem">
          <Title>Profile</Title>
          <Text secondary>Manage your profile settings.</Text>
        </Flex>
        <Flex flexDirection="column" gap="1rem" mt="2rem">
          <Avatar initials="MT" large />
          <Flex flexDirection="column" gap="0.4rem">
            <Text bold>@martinteglas</Text>
            <Text secondary>Account created December 22</Text>
          </Flex>
        </Flex>
      </Container>
      <Menu />
    </Page>
  );
};
