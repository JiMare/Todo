import React from 'react';
import { Page } from '@/components/layout/Page';
import { ReactComponent as IconAlert } from '@/components/assets/icons/alert-circle.svg';
import { IconButton } from '@/components/ui/IconButton';
import { Flex } from '@/components/layout/Flext';
import { Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page center>
      <Flex flexDirection="column" alignItems="center" gap="1rem">
        <IconButton bg="var(--color-secondary-bg)">
          <IconAlert />
        </IconButton>
        <Text secondary>Error: 404</Text>
        <Button secondary onClick={() => navigate('/')}>
          Back to dashboard
        </Button>
      </Flex>
    </Page>
  );
};
