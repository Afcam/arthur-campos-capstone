export interface Players {
  player_uuid: string;
  username: string;
  avatar: string;
}

export interface Cards {
  card_uuid: string;
  owner: string;
}

export interface Game {
  room_uuid: string;
  status: boolean;
  current_player: string;
  players: Players[];
  cards: Cards[];
}
