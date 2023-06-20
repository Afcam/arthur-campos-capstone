import './PlayerCard.scss';
import { Avatar, Text } from '@mantine/core';

interface Props {
  username: string;
  avatar: string;
}

export default function PlayerCard({ username, avatar }: Props) {
  return (
    <div className="player-card">
      <div className="player-card__avatar">
        <Avatar src={avatar} alt={username}>
          {username}
        </Avatar>
      </div>
      <Text truncate>Review pictures</Text>
    </div>
  );
}
