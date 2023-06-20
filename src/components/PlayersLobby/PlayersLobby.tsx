import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayersLobby.scss';

interface Props {
  users: Array<{
    username: string;
    avatar: string;
    id: number;
  }>;
}

export default function PlayersLobby({ users }: Props) {
  return (
    <div className="players-lobby">
      {users.map((user) => (
        <PlayerCard key={user.id} username={user.username} avatar={user.avatar} />
      ))}
    </div>
  );
}
