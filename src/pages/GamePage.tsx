import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppShell, LoadingOverlay, useMantineTheme } from '@mantine/core';

import { API_URL } from '@/config/config';
import { io, type Socket } from 'socket.io-client';
import storage from '@/utils/storage';

import GameFooter from '@/components/GameFooter';
import GameBoard from '@/components/GameBoard';

export default function GamePage() {
  const theme = useMantineTheme();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [playedCards, setPlayedCards] = useState([]);
  const [drawPile, setDrawPile] = useState(10);
  const [handCards, setHandCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(undefined);
  const [nextPlayer, setNextPlayer] = useState('');
  const [players, setPlayers] = useState([]);
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = storage.getToken();
    if (!token) {
      navigate('/');
    }
    const newSocket: Socket = io(API_URL, {
      auth: { token: `Bearer ${token}` },
    });

    setSocket(newSocket);

    newSocket.on('currentPlayer', (player) => {
      setCurrentPlayer(player);
    });

    newSocket.on('nextPlayer', (player) => {
      console.log(player);
      setNextPlayer(player);
    });

    newSocket.on('handCards', (cards) => {
      console.log(cards);

      setHandCards(cards);
    });

    newSocket.on('cardPlayed', ({ player, card }) => {
      setPlayedCards((prevPlayedCards) => [...prevPlayedCards, { player, card }]);
    });

    newSocket.on('drawPile', (pile) => {
      setDrawPile(pile);
    });

    newSocket.on('players', (playersInfo) => {
      console.log(playersInfo);

      setPlayers(playersInfo);
    });

    newSocket.on('joined', (message) => {
      setLogs((prevLog) => [message, ...prevLog]);
    });

    newSocket.on('left', (message) => {
      setLogs((prevLog) => [message, ...prevLog]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleStart = async () => {
    if (socket) {
      socket.emit('start');
    }
  };

  if (!currentPlayer) {
    return <LoadingOverlay visible />;
  }

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      footer={<GameFooter player={currentPlayer} />}
    >
      <GameBoard
        logs={logs}
        onStart={handleStart}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        handCards={handCards}
        playedCards={playedCards}
        players={players}
        drawPile={drawPile}
      />
    </AppShell>
  );
}
