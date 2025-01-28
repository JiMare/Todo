import React from 'react';
import { Container } from '@/components/layout/Container';
import { Flex } from '@/components/layout/Flext';
import { Page } from '@/components/layout/Page';
import { Avatar } from '@/components/ui/Avatar';
import { Text, Title } from '@/components/ui/Typography';
import { Menu } from '@/modules/Menu';
import { useAuthStore } from '@/stores/authStore';
import { decodeToken } from '@/utils/decodeToken';
import { ModeSwitch } from '@/modules/ModeSwitch';
import { SignoutBox } from '@/modules/SignoutBox';

export const ProfilePage: React.FC = () => {
  const { token } = useAuthStore.getState();
  const userInfo = decodeToken(token);
  return (
    <Page>
      <Container>
        <Flex justifyContent="flex-start" flexDirection="column" gap="0.8rem" mt="4rem">
          <Title>Profile</Title>
          <Text secondary>Manage your profile settings.</Text>
        </Flex>
        <Flex flexDirection="column" gap="1rem" mt="2rem">
          {userInfo && (
            <>
              <Avatar initials={`${userInfo.first_name.charAt(0)}${userInfo.last_name.charAt(0)}`} large />
              <Flex flexDirection="column" gap="0.4rem">
                <Text bold> {`@${userInfo.first_name.toLowerCase()}${userInfo.last_name.toLowerCase()}`}</Text>
                <Text secondary>Account created December 22</Text>
              </Flex>
            </>
          )}
        </Flex>
        <Flex flexDirection="column" gap="1rem" mt="2rem">
          <ModeSwitch />
          <SignoutBox />
        </Flex>
      </Container>
      <Menu />
    </Page>
  );
};
