import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppShell,
  Center,
  Space,
  Title,
  Stack,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { IconSwords } from '@tabler/icons-react';

import { createGameRoomAPI, joinGameRoomAPI } from '@/utils/api';
import storage from '@/utils/storage';
import SplashScreen from '@/components/SplashScreen/SplashScreen';
import { HomeHeader } from '../components/HomeHeader';
import { HomeFooter } from '../components/HomeFooter';

export default function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = async (roomUUID: string, username: string) => {
    storage.clearToken();
    console.log(roomUUID, username);
    try {
      const response =
        roomUUID === ''
          ? await createGameRoomAPI(username)
          : await joinGameRoomAPI(roomUUID, username);

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
