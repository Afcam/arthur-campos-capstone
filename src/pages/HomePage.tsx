import { useState } from 'react';

import {
  AppShell,
  Center,
  Flex,
  Input,
  Container,
  Button,
  Space,
  Paper,
  Title,
  Stack,
  Group,
} from '@mantine/core';
import { IconSwords } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import SplashScreen from '@/components/SplashScreen/SplashScreen';
import ToggleTheme from '@/components/ToggleTheme';

import { createGameRoomAPI, joinGameRoomAPI } from '@/utils/api';
import storage from '@/utils/storage';

const HomeHeader = () => {
  return (
    <Flex p="md" justify="flex-end" align="center">
      <ToggleTheme />
    </Flex>
  );
};

export default function HomePage() {
  const navigate = useNavigate();

  const [gameMode, setGameMode] = useState('');
  const [roomUUID, setRoomUUID] = useState('');
  const [username, setUsername] = useState('');

  const handleEnter = async () => {
    try {
      if (gameMode === 'join') {
        const token = await joinGameRoomAPI(roomUUID);
        storage.clearToken();
        storage.setToken(token?.data);
      } else {
        const token = await createGameRoomAPI();
        storage.clearToken();
        storage.setToken(token?.data);
      }
      console.log(storage.getToken());
      navigate('/game');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppShell padding="md" header={<HomeHeader />}>
      <Center h="100%">
        <Stack align="center">
          <Group>
            <Title order={1}>Git Clash</Title>
            <IconSwords />
          </Group>
          <Space h="xl" />

          {gameMode.length === 0 ? (
            <SplashScreen
              newGame={() => {
                setGameMode('new');
              }}
              joinGame={(roomUUID) => {
                setRoomUUID(roomUUID);
                setGameMode('join');
              }}
            />
          ) : (
            <Paper shadow="xs" p="md">
              <Container size="xs" p="xs">
                <Input
                  placeholder="USERNAME"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <Space h="md" />

                <Button onClick={handleEnter} fullWidth>
                  ENTER
                </Button>
              </Container>
            </Paper>
          )}
        </Stack>
      </Center>
    </AppShell>
  );
}
