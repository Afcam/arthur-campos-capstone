import LobbyHeader from '@/components/LobbyHeader/LobbyHeader';
import PlayersLobby from '@/components/PlayersLobby/PlayersLobby';
import { Divider } from '@mantine/core';

const users = [
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
    id: 3,
    username: 'User 4',
    avatar: 'https://avatars.githubusercontent.com/u/21973765?v=4',
  },
];

export default function LobbyPage() {
  return (
    <>
      <LobbyHeader />
      <Divider my="sm" />
      <PlayersLobby users={users} />
    </>
  );
}
