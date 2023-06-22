import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayersLobby.scss';

interface Props {
  players: Array<{
    username: string;
    avatar: string;
    id: number;
  }>;
}

export default function PlayersLobby({ players }: Props) {
  return (
    <div className="players-lobby">
      {players.map((user) => (
        <PlayerCard
          key={user.id}
          username={user.username}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}
