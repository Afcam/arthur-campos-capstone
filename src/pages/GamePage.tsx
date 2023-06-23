import BoardFooter from '@/components/BoardFooter';
import BoardGame from '@/components/BoardGame';
import BoardHeader from '@/components/BoardHeader';
import {
  ActionIcon,
  useMantineColorScheme,
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useState } from 'react';

export default function GamePage() {
  const theme = useMantineTheme();

  return (
    <AppShell
      layout="alt"
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application navbar</Text>
          </Navbar>
        </MediaQuery>
      }
      footer={<BoardFooter />}
      header={<BoardHeader />}
      // aside={
      // <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //   <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //     <Text>Application sidebar</Text>
      //   </Aside>
      // </MediaQuery>
      // }
    >
      <BoardGame />
    </AppShell>
  );
}
