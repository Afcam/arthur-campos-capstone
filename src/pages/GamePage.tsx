import { useEffect, useState } from 'react';
import {
  AppShell,
  Aside,
  Loader,
  LoadingOverlay,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';

import BoardFooter from '@/components/BoardFooter';
import BoardGame from '@/components/BoardGame';
import BoardHeader from '@/components/BoardHeader';
import BoardNavbar from '@/components/BoardNavbar';
import socket from '@/lib/socket';
import { getPlayerInfoAPI } from '@/utils/api';

export default function GamePage() {
  const theme = useMantineTheme();
  const [playerInfo, setPlayerInfo] = useState(undefined);

  // const [recentActivities, setRecentActivities] = useState([]);
  const [recentActivities, setRecentActivities] = useState([
    {
      title: 'Initial Commit',
      username: 'Arthur',
      message: "You'apos;ve created new branch from master",
      timestamp: new Date(),
    },
  ]);

  useEffect(() => {
    getPlayerInfoAPI().then((response) => {
      setPlayerInfo(response.data);
    });
  }, []);

  useEffect(() => {
    socket.on('joinedRoom', (newActivity) => {
      console.log('Received data:', newActivity);
      setRecentActivities((prevActivities) => [
        {
          title: newActivity.title,
          username: newActivity.username,
          message: newActivity.message,
          timestamp: new Date(),
        },
        ...prevActivities,
      ]);
    });
  }, []);

  useEffect(() => {
    socket.on('joinedRoom', (response) => {
      console.log('Received data:', response.room_id);
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
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<BoardNavbar recentActivities={recentActivities} />}
      footer={<BoardFooter roomUUID={playerInfo.room_uuid} />}
      header={<BoardHeader />}
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       {/* <Text>Application sidebar</Text> */}
      //     </Aside>
      //   </MediaQuery>
      // }
    >
      <BoardGame />
    </AppShell>
  );
}
