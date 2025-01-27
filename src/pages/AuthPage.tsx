import { Box, TopLine } from '@/components/layout/Container';
import { Page } from '@/components/layout/Page';
import { Tab, Tabs } from '@/components/ui/Tabs';
import { LoginForm } from '@/modules/auth/LoginForm';
import { SignupForm } from '@/modules/auth/SignupForm';
import { useAuthStore } from '@/stores/authStore';
import React, { useEffect, useState } from 'react';

export const AuthPage: React.FC = () => {
  const logOut = useAuthStore((store) => store.logOut);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    //to be sure no user is logged
    logOut();
  }, [logOut]);

  return (
    <Page center>
      <Box>
        <TopLine />
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
