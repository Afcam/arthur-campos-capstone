import { AppShell, useMantineTheme } from '@mantine/core';

import GameFooter from '@/components/GameFooter';
import GameBoard from '@/components/GameBoard';
import SocketProvider from '@/context/socket/provider';

export default function GamePage() {
  const theme = useMantineTheme();

  return (
    <SocketProvider>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        footer={<GameFooter />}
      >
        <GameBoard />
      </AppShell>
    </SocketProvider>
  );
}
