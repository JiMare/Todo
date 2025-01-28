import React from 'react';
import { Flex } from '@/components/layout/Flext';
import { GreyBox } from '@/components/layout/GreyBox';
import { Switch } from '@/components/ui/Switch';
import { Text } from '@/components/ui/Typography';
import { useThemeStore } from '@/stores/themeStore';

export const ModeSwitch: React.FC = () => {
  const { mode, toggleTheme } = useThemeStore((store) => store);

  return (
    <GreyBox>
      <Flex justifyContent="space-between" alignItems="center">
        <Text bold maxWidth="10.75rem" secondary>
          Dark theme
        </Text>
        <Switch checked={mode === 'dark'} onChange={toggleTheme} />
      </Flex>
    </GreyBox>
  );
};
