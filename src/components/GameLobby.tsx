import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Button,
  Center,
  Avatar,
  LoadingOverlay,
  Stepper,
} from '@mantine/core';
import { useSocket } from '@/context/socket';

export default function GameLobby() {
  const [players, setPlayers] = useState([]);
  const { socket } = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    socket?.emit('getPlayers');

    socket?.on('players', (data) => {
      setPlayers(data);
    });
  }, [socket]);

  const handleStart = () => {
    socket?.emit('start');
  };

  return (
    <Paper w="100%" h="100%" shadow="sm" p="xs" radius="sm" withBorder>
      <Stack h="100%" p="xl" align="center">
        <Stepper active={1} w="100%">
          <Stepper.Step label="Step 1" description="Create" />
          <Stepper.Step label="Step 2" description="Start" loading />
          <Stepper.Step label="Step 3" description="Play" />
        </Stepper>
        <Title>Waiting for players</Title>
        <Group position="center">
          <Button
            variant="default"
            onClick={() => {
              navigate('/');
            }}
          >
            Back
          </Button>
          <Button onClick={handleStart}>START</Button>
        </Group>

        <Center h="100%">
          <Group>
            {players.map((player, index) => (
              <Button
                key={index}
                radius="md"
                p="xs"
                h="100%"
                disabled={!player.online}
              >
                <LoadingOverlay visible={!player.online} overlayBlur={2} />

                <Group>
                  <Avatar size="4rem" color="blue" src={player.avatar} />
                  <Text fz="md">{player.username}</Text>
                </Group>
              </Button>
            ))}
          </Group>
        </Center>
      </Stack>
    </Paper>
  );
}
