import { useEffect, useState } from 'react';
import {
  MediaQuery,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Button,
  ScrollArea,
  Avatar,
  LoadingOverlay,
  Affix,
  ActionIcon,
  Transition,
  Modal,
} from '@mantine/core';
import { IconCrown, IconInfoCircle } from '@tabler/icons-react';

import Activities from '@/components/Activities';
import ToggleTheme from '@/components/ToggleTheme';
import GitClashCard from './GitClashCard/GitClashCard';
import BrandLogo from './BrandLogo';
import { useSocket } from '@/context/socket';
import GameLobby from './GameLobby';
import { BoardPlayers } from './BoardPlayers';
import { useDisclosure } from '@mantine/hooks';

function Brand() {
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder>
      <BrandLogo />
    </Paper>
  );
}

function RecentActivities({ logs }) {
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder h="100%">
      <Stack>
        <Title order={2}>Recent Activities</Title>
        <ScrollArea h="65vh" offsetScrollbars>
          <Activities logs={logs} />
        </ScrollArea>
      </Stack>
    </Paper>
  );
}

function Aside({ logs, player }) {
  return (
    <MediaQuery
      smallerThan="sm"
      styles={{
        display: 'none',
      }}
    >
      <Stack w="300px" h="100%">
        <Brand />
        <RecentActivities logs={logs} />
        <Paper shadow="sm" p="xs" radius="sm" withBorder h="fit-content">
          <Group h="100%">
            <Avatar size="3rem" color="blue" src={player.avatar} />
            <Text fz="md">{player.username}</Text>
          </Group>
        </Paper>
      </Stack>
    </MediaQuery>
  );
}

function AllCards() {
  const cards = [
    'Bug',
    'Git Merge',
    'Git Stash',
    'Git Ignore',
    'Git Blame',
    'Git Cherry-Pick',
    'Git Reset',
  ];
  return (
    <Group position="center" w="100%">
      {cards.map((type, index) => (
        <GitClashCard key={type} w="150px" type={type} />
      ))}
    </Group>
  );
}

function BoardHeader({ room_uuid }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Git Clash Cards"
        withCloseButton={false}
        size="80vw"
      >
        <AllCards />
      </Modal>

      <Paper shadow="sm" px="xs" py="4px" radius="0" withBorder w="100%">
        <Group noWrap position="apart" grow={false}>
          <Text fz="xs"> gitclash / game / {room_uuid}</Text>
          <Group>
            <ActionIcon variant="default" size="1.1rem" onClick={open}>
              <IconInfoCircle size="1rem" />
            </ActionIcon>

            <ToggleTheme />
          </Group>
        </Group>
      </Paper>
    </>
  );
}

function BoardDecks({ drawPile, playedPile, onDraw }) {
  const cards = Array(drawPile).fill(null);

  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder w="66%" h="100%">
      <Group position="center" p="md" h="100%" spacing="xl">
        <Group spacing="0">
          {cards.map((card, index) => (
            <GitClashCard
              key={index}
              number={index}
              w="200px"
              stack={true}
              onClick={onDraw}
            />
          ))}
        </Group>
        <Group spacing="0">
          {playedPile.map((card, index) => (
            <GitClashCard
              key={index}
              w="200px"
              stack={true}
              type={card.card.type}
            />
          ))}
        </Group>
      </Group>
    </Paper>
  );
}

function BoardCards({
  cards,
  playCard,
}: {
  cards: [];
  playCard: (card) => void;
}) {
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder h="250px">
      <Group position="center" noWrap>
        {cards.map((card, index) => (
          <GitClashCard
            key={index}
            w="9rem"
            type={card.type}
            onClick={() => {
              playCard(card);
            }}
          />
        ))}
      </Group>
    </Paper>
  );
}

type Logs = Array<{
  title: string;
  message: string;
  timestamp: Date;
}>;

function Board({
  logs,
  playCard,
  currentPlayer,
  nextPlayer,
  handCards,
  playedCards,
  drawPile,
  gameActive,
  onDraw,
}: {
  logs: [];
  playCard: (card) => void;
  currentPlayer: { room_uuid: string };
  nextPlayer: string;
  handCards: [];
  playedCards: [];
  drawPile: number;
  gameActive: boolean;
}) {
  return (
    <Stack h="100%" w="100%">
      <BoardHeader room_uuid={currentPlayer.room_uuid} />

      {!gameActive ? (
        <GameLobby />
      ) : (
        <>
          <Group noWrap h="100%">
            <BoardDecks
              playedPile={playedCards}
              drawPile={drawPile}
              onDraw={onDraw}
            />
            <BoardPlayers />
          </Group>
          <BoardCards cards={handCards} playCard={playCard} />
        </>
      )}
    </Stack>
  );
}

export default function GameBoard() {
  const [playedCards, setPlayedCards] = useState([]);
  const [drawPile, setDrawPile] = useState(10);
  const [handCards, setHandCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(undefined);
  const [nextPlayer, setNextPlayer] = useState<{ player_uuid: string }>({
    player_uuid: '',
  });
  const [logs, setLogs] = useState<Logs>([]);
  const [gameActive, setGameActive] = useState(false);
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
      setGameActive(true);
    });

    socket?.emit('getCurrentPlayer');

    socket?.on('currentPlayer', (player) => {
      setCurrentPlayer(player);
    });

    socket?.on('nextPlayer', (player) => {
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

    socket?.on('handCards', (cards) => {
      console.log(cards);
      setHandCards(cards);
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
      setPlayedCards((prevPlayedCards) => [
        ...prevPlayedCards,
        { player_uuid, card },
      ]);
    });

    socket?.on('drawPile', (pile) => {
      setDrawPile(pile);
    });

    socket?.on('joined', (message) => {
      setLogs((prevLog) => [message, ...prevLog]);
    });

    socket?.on('left', (message) => {
      setLogs((prevLog) => [message, ...prevLog]);
    });
  }, [socket]);

  const handlePlayCard = (card) => {
    if (
      !socket ||
      !currentPlayer ||
      !nextPlayer ||
      currentPlayer.player_uuid !== nextPlayer.player_uuid
    ) {
      return;
    }

    setHandCards((prevCards) => prevCards.filter((c) => c.id !== card.id));
    socket.emit('playCard', { card });
  };

  const handleDrawCard = () => {
    if (
      !socket ||
      !currentPlayer ||
      !nextPlayer ||
      currentPlayer.player_uuid !== nextPlayer.player_uuid
    ) {
      return;
    }
    socket?.emit('drawCard');
  };

  if (!currentPlayer) {
    return <LoadingOverlay visible />;
  }

  return (
    <>
      <Group h="100%" noWrap>
        <Aside logs={logs} player={currentPlayer} />

        <Board
          playCard={handlePlayCard}
          currentPlayer={currentPlayer}
          nextPlayer={nextPlayer}
          handCards={handCards}
          playedCards={playedCards}
          drawPile={drawPile}
          gameActive={gameActive}
          onDraw={handleDrawCard}
        />
      </Group>
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
