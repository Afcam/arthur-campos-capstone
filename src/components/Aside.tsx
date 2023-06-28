import { useEffect, useState } from 'react';
import { MediaQuery, Group, Paper, Stack, Text, Avatar } from '@mantine/core';
import { useSocket } from '@/context/socket';
import { Brand, RecentActivities } from './GameBoard';

type Logs = Array<{
  title: string;
  message: string;
  timestamp: Date;
}>;

export function Aside() {
  const [player, setPlayer] = useState(undefined);
  const [logs, setLogs] = useState<Logs>([]);
  const { socket } = useSocket();

  useEffect(() => {
    socket?.on('started', () => {
      setLogs((prevLog) => [
        {
          title: 'START',
          message: 'The Game Started',
          timestamp: new Date(),
        },
        ...prevLog,
      ]);
    });

    socket?.on('currentPlayer', (data) => {
      setPlayer(data);
    });

    socket?.on('nextPlayer', (data) => {
      setLogs((prevLog) => [
        {
          title: 'Next',
          message: data.player_uuid,
          timestamp: new Date(),
        },
        ...prevLog,
      ]);
    });

    socket?.on('cardPlayed', ({ player_uuid, card }) => {
      setLogs((prevLog) => [
        {
          title: card.type,
          message: player_uuid,
          timestamp: new Date(),
        },
        ...prevLog,
      ]);
    });
  }, [socket]);
  return (
    <>
      <MediaQuery
        smallerThan="sm"
        styles={{
          display: 'none',
        }}
      >
        <Stack w="300px" h="100%">
          <Brand />
          <RecentActivities logs={logs} />
          <Paper shadow="sm" p="xs" radius="sm" withBorder h="100%">
            <Group h="100%">
              <Avatar size="3rem" color="blue" src={player?.avatar} />
              <Text fz="md">{player?.username}</Text>
            </Group>
          </Paper>
        </Stack>
      </MediaQuery>

      <Affix position={{ bottom: '20px', right: '20px' }}>
        <Transition
          transition="slide-up"
          mounted={currentPlayer.player_uuid === nextPlayer.player_uuid}
        >
          {(transitionStyles) => (
            <Button
              leftIcon={<IconCrown size="1rem" />}
              style={transitionStyles}
              bg="yellow"
            >
              Your Turn
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
