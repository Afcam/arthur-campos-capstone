import { useState, useEffect } from 'react';
import { Divider } from '@mantine/core';
import LobbyHeader from '@/components/LobbyHeader/LobbyHeader';
import PlayersLobby from '@/components/PlayersLobby/PlayersLobby';
import socket from '@/lib/socket';

export default function LobbyPage() {
  const [roomUUID, setRoomUUID] = useState(undefined);
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: 'User 1',
      avatar: 'https://avatars.githubusercontent.com/u/21973765?v=4',
    },
    {
      id: 2,
      username: 'User 2',
      avatar: 'https://avatars.githubusercontent.com/u/21973765?v=4',
    },
    {
      id: 3,
      username: 'User 3',
      avatar: 'https://avatars.githubusercontent.com/u/21973765?v=4',
    },
    {
      id: 4,
      username: 'User 4',
      avatar: 'https://avatars.githubusercontent.com/u/21973765?v=4',
    },
  ]);

  useEffect(() => {
    socket.on('joinedRoom', (roomId) => {
      setRoomUUID(roomId);
      console.log('Received data:', roomId);
    });

    socket.on('newPlayer', (player) => {
      setPlayers((prevPlayers) => [...prevPlayers, player]);
      console.log('Received data:', player);
    });
  }, [socket]);

  return (
    <>
      <LobbyHeader />
      {roomUUID}
      <Divider my="sm" />
      <PlayersLobby players={players} />
    </>
  );
}
