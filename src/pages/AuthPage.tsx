import { Box } from '@/components/layout/Container';
import { Page } from '@/components/layout/Page';
import { Tab, Tabs } from '@/components/ui/Tabs';
import { LoginForm } from '@/modules/auth/LoginForm';
import { SignupForm } from '@/modules/auth/SignupForm';
import React, { useState } from 'react';

export const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Page center>
      <Box>
        <Tabs mb="2rem" mt="2rem">
          <Tab isActive={activeTab === 0} onClick={() => setActiveTab(0)} title="Login" />
          <Tab isActive={activeTab === 1} onClick={() => setActiveTab(1)} title="SignUp" />
        </Tabs>
        {activeTab === 0 && <LoginForm />}
        {activeTab === 1 && <SignupForm />}
      </Box>
    </Page>
  );
};
