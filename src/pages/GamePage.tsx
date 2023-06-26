import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Affix,
  AppShell,
  Button,
  LoadingOverlay,
  Notification,
  Transition,
  useMantineTheme,
} from '@mantine/core';

import { API_URL } from '@/config/config';
import { io, type Socket } from 'socket.io-client';
import storage from '@/utils/storage';

import GameFooter from '@/components/GameFooter';
import GameBoard from '@/components/GameBoard';
import { IconArrowUp, IconCrown, IconX } from '@tabler/icons-react';

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
  const [gameActive, setGameActive] = useState(false);
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

    newSocket.on('started', () => {
      setLogs((prevLog) => [
        {
          title: 'START',
          message: 'The Game Started',
          timestamp: new Date(),
        },
        ...prevLog,
      ]);
      setGameActive(true);
    });

    newSocket.on('currentPlayer', (player) => {
      console.log(currentPlayer);
      setCurrentPlayer(player);
    });

    newSocket.on('nextPlayer', (player) => {
      console.log(player);
      setLogs((prevLog) => [
        {
          title: 'Next',
          message: player.player_uuid,
          timestamp: new Date(),
        },
        ...prevLog,
      ]);
      setNextPlayer(player);
    });

    newSocket.on('handCards', (cards) => {
      console.log(cards);

      setHandCards(cards);
    });

    newSocket.on('cardPlayed', ({ player_uuid, card }) => {
      console.log(player_uuid);
      setLogs((prevLog) => [
        {
          title: card.type,
          message: player_uuid,
          timestamp: new Date(),
        },
        ...prevLog,
      ]);
      setPlayedCards((prevPlayedCards) => [...prevPlayedCards, { player_uuid, card }]);
    });

    newSocket.on('drawPile', (pile) => {
      setDrawPile(pile);
    });

    newSocket.on('players', (playersInfo) => {
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

  const handleStart = () => {
    if (socket) {
      socket.emit('start');
    }
  };

  const handlePlayCard = (card) => {
    if (socket && currentPlayer && nextPlayer) {
      if (currentPlayer.player_uuid === nextPlayer.player_uuid) {
        socket.emit('playCard', { card });
      }
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
        playCard={handlePlayCard}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        handCards={handCards}
        playedCards={playedCards}
        players={players}
        drawPile={drawPile}
        gameActive={gameActive}
      />
      <Affix position={{ bottom: '20px', right: '20px' }}>
        <Transition
          transition="slide-up"
          mounted={currentPlayer.player_uuid === nextPlayer.player_uuid}
        >
          {(transitionStyles) => (
            <Button leftIcon={<IconCrown size="1rem" />} style={transitionStyles} bg="yellow">
              Your Turn
            </Button>
          )}
        </Transition>
      </Affix>
    </AppShell>
  );
}
