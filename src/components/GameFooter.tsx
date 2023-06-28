import { useEffect, useState } from 'react';
import { Flex, Footer, Text, LoadingOverlay } from '@mantine/core';
import ToggleTheme from './ToggleTheme';
import { useSocket } from '@/context/socket';

interface Player {
  player_uuid: string;
  room_uuid: string;
  username: string;
  avatar: string;
}

export default function GameFooter() {
  const [player, setPlayer] = useState<Player | null>(null);
  const { socket } = useSocket();

  useEffect(() => {
    socket?.emit('getCurrentPlayer');

    socket?.on('currentPlayer', (player) => {
      setPlayer(player);
    });
  }, [socket]);

  if (!player) {
    return <LoadingOverlay visible />;
  }

  return (
    <Footer height={40} py="xs" px="xl">
      <Flex justify="space-between" align="center" h="100%">
        <Text>ROOM: {player?.room_uuid}</Text>
        <ToggleTheme />
      </Flex>
    </Footer>
  );
}
