import { Link } from 'react-router-dom';
import { MediaQuery, Group, Paper, Stack, Title, Text, Button, ScrollArea } from '@mantine/core';
import { IconSwords } from '@tabler/icons-react';

import Activities from '@/components/Activities';
import ToggleTheme from '@/components/ToggleTheme';
import GitClashCard from './GitClashCard/GitClashCard';

function Brand() {
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <Group w="100%" position="center">
          <Title order={1}>Git Clash</Title>
          <IconSwords />
        </Group>
      </Link>
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

function Aside({ logs }) {
  return (
    <MediaQuery
      smallerThan="sm"
      styles={{
        display: 'none',
      }}
    >
      <Stack w="300px" h="100%">
        <Brand />
        <RecentActivities logs={logs}></RecentActivities>
      </Stack>
    </MediaQuery>
  );
}

function BoardHeader({ room_uuid }) {
  return (
    <Paper shadow="sm" px="xs" py="4px" radius="0" withBorder w="100%">
      <Group noWrap position="apart" grow={false}>
        <Text fz="xs"> gitclash / game / {room_uuid}</Text>
        <ToggleTheme />
      </Group>
    </Paper>
  );
}

function BoardPlayers() {
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder h="100%" w="33%">
      Users
    </Paper>
  );
}

function BoardDecks(props) {
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder w="66%" h="100%">
      DECK // <Button onClick={props.onStart}>START</Button>
    </Paper>
  );
}

function BoardCards({ cards }: { cards: [] }) {
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder>
      <Group position="center" noWrap>
        {cards.map((card, index) => (
          <GitClashCard key={index} w="150px" stack={false} />
        ))}
      </Group>
    </Paper>
  );
}

function Board({
  onStart,
  currentPlayer,
  nextPlayer,
  handCards,
  playedCards,
  players,
}: {
  onStart: () => void;
  currentPlayer: { room_uuid: string };
  nextPlayer: string;
  handCards: [];
  playedCards: [];
  players: [];
}) {
  return (
    <Stack h="100%" w="100%">
      <BoardHeader room_uuid={currentPlayer.room_uuid} />
      <Group noWrap h="100%">
        <BoardDecks onStart={onStart} />
        <BoardPlayers />
      </Group>
      <BoardCards cards={handCards} />
    </Stack>
  );
}

interface Props {
  logs: [];
  onStart: () => void;
  currentPlayer: string;
  nextPlayer: string;
  handCards: [];
  playedCards: [];
  players: [];
}

export default function GameBoard({
  logs,
  onStart,
  currentPlayer,
  nextPlayer,
  handCards,
  playedCards,
  players,
}: Props) {
  return (
    <Group h="100%" noWrap>
      <Aside logs={logs} />
      <Board
        onStart={onStart}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        handCards={handCards}
        playedCards={playedCards}
        players={players}
      />
    </Group>
  );
}
