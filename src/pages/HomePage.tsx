import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppShell, Center, Space, Title, Stack, Group, useMantineTheme } from '@mantine/core';
import { IconSwords } from '@tabler/icons-react';

import { createGameRoomAPI, joinGameRoomAPI } from '@/utils/api';
import storage from '@/utils/storage';
import SplashScreen from '@/components/SplashScreen';
import { HomeHeader } from '../components/HomeHeader';
import { HomeFooter } from '../components/HomeFooter';

export default function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = async (username: string, avatar: string, room?: string) => {
    try {
      avatar = `https://api.dicebear.com/6.x/adventurer/svg?seed=${username}`;
      storage.clearToken();
      // ! Change for the user to chose
      const response =
        room === ''
          ? await createGameRoomAPI({ username, avatar })
          : await joinGameRoomAPI({ username, avatar, room_uuid: room });

      storage.setToken(response?.data);
      navigate(`/game`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppShell header={<HomeHeader />} footer={<HomeFooter />}>
      <Center h="100%">
        <Stack align="center" w="300px" h="500px">
          <Group w="200px" position="apart">
            <Title order={1}>Git Clash</Title>
            <IconSwords />
          </Group>
          <Space h="xl" />
          <SplashScreen onSubmit={handleSubmit} />
        </Stack>
      </Center>
    </AppShell>
  );
}
