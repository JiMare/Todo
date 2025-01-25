import { Box } from '@/components/layout/Container';
import { Page } from '@/components/layout/Page';
import { LoginForm } from '@/modules/auth/LoginForm';
import React from 'react';

export const AuthPage: React.FC = () => {
  return (
    <Page center>
      <Box>
        <LoginForm />
      </Box>
    </Page>
  );
};
