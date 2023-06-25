import { useEffect, useState } from 'react';
import { AppShell, LoadingOverlay, useMantineTheme } from '@mantine/core';

import { API_URL } from '@/config/config';
import { getPlayerInfoAPI } from '@/utils/api';
import { io, type Socket } from 'socket.io-client';
import storage from '@/utils/storage';

import BoardFooter from '@/components/BoardFooter';
import BoardGame from '@/components/BoardGame/BoardGame';
import BoardNavbar from '@/components/BoardNavbar';

export default function GamePage() {
  const theme = useMantineTheme();
  const [playerInfo, setPlayerInfo] = useState(undefined);
  const [recentActivities, setRecentActivities] = useState([
    {
      title: 'Initial Commit',
      username: '',
      message: "You've created new branch from master",
      timestamp: new Date(),
    },
  ]);

  useEffect(() => {
    getPlayerInfoAPI().then((response) => {
      setPlayerInfo(response.data);
    });
  }, []);

  useEffect(() => {
    const token = storage.getToken() ?? '';

    const socket: Socket = io(API_URL, {
      auth: { token: `Bearer ${token}` },
    });

    socket.on('action', (message) => {
      setRecentActivities((prev) => [message, ...prev]);
    });
  }, []);

  if (!playerInfo) {
    return <LoadingOverlay visible />;
  }

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
      asideOffsetBreakpoint="sm"
      // header={<BoardHeader />}
      navbar={
        <BoardNavbar
          recentActivities={recentActivities}
          username={playerInfo.username}
        />
      }
      footer={<BoardFooter roomUUID={playerInfo.room_uuid} />}
    >
      <BoardGame />
    </AppShell>
  );
}
