import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MediaQuery,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Button,
  ScrollArea,
  Center,
  Avatar,
  LoadingOverlay,
  Stepper,
} from '@mantine/core';
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
        <Paper shadow="sm" p="xs" radius="sm" withBorder h="100%">
          <Group h="100%">
            <Avatar size="3rem" color="blue" src={player.avatar} />
            <Text fz="md">{player.username}</Text>
          </Group>
        </Paper>
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

function BoardDecks({ drawPile, playedPile }) {
  const cards = Array(drawPile).fill(null);
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder w="66%" h="100%">
      <Group position="center" p="md" h="100%" spacing="xl">
        <Group spacing="0">
          {cards.map((card, index) => (
            <GitClashCard key={index} number={index} w="200px" stack={true} />
          ))}
        </Group>
        <Group spacing="0">
          {playedPile.map((card, index) => (
            <GitClashCard key={index} w="200px" stack={true} type={card.type} />
          ))}
        </Group>
      </Group>
    </Paper>
  );
}

function BoardCards({ cards }: { cards: [] }) {
  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder h="250px">
      <Group position="center" noWrap>
        {cards.map((card, index) => (
          <GitClashCard key={index} w="150px" type={card.type} />
        ))}
      </Group>
    </Paper>
  );
}

function Lobby(props) {
  const navigate = useNavigate();
  return (
    <Paper w="100%" h="100%" shadow="sm" p="xs" radius="sm" withBorder>
      <Stack h="100%" p="xl" align="center">
        <Stepper active={1} w="100%">
          <Stepper.Step label="Step 1" description="Create" />
          <Stepper.Step label="Step 2" description="Start" loading />
          <Stepper.Step label="Step 3" description="Play" />
        </Stepper>
        <Title>Waiting for players</Title>
        <Group position="center">
          <Button
            variant="default"
            onClick={() => {
              navigate('/');
            }}
          >
            Back
          </Button>
          <Button onClick={props.onStart}>START</Button>
        </Group>

        <Center h="100%">
          <Group>
            {props.players.map((player, index) => (
              <Button
                key={index}
                color="gray"
                radius="md"
                p="xs"
                h="100%"
                disabled={!player.online}
              >
                <LoadingOverlay visible={!player.online} overlayBlur={2} />

                <Group>
                  <Avatar size="4rem" color="blue" src={player.avatar} />
                  <Text fz="md">{player.username}</Text>
                </Group>
              </Button>
            ))}
          </Group>
        </Center>
      </Stack>
    </Paper>
  );
}

function Board({
  onStart,
  currentPlayer,
  nextPlayer,
  handCards,
  playedCards,
  drawPile,
  players,
  gameActive,
}: {
  onStart: () => void;
  currentPlayer: { room_uuid: string };
  nextPlayer: string;
  handCards: [];
  playedCards: [];
  drawPile: number;
  players: [];
  gameActive: boolen;
}) {
  return (
    <Stack h="100%" w="100%">
      <BoardHeader room_uuid={currentPlayer.room_uuid} />

      {!gameActive ? (
        <Lobby onStart={onStart} players={players} />
      ) : (
        <>
          <Group noWrap h="100%">
            <BoardDecks playedPile={playedCards} drawPile={drawPile} />
            <BoardPlayers />
          </Group>
          <BoardCards cards={handCards} />
        </>
      )}
    </Stack>
  );
}

export default function GameBoard({
  logs,
  onStart,
  currentPlayer,
  nextPlayer,
  handCards,
  playedCards,
  drawPile,
  players,
  gameActive,
}: {
  logs: [];
  onStart: () => void;
  currentPlayer: { room_uuid: string };
  nextPlayer: string;
  handCards: [];
  playedCards: [];
  players: [];
  drawPile: number;
  gameActive: boolean;
}) {
  return (
    <Group h="100%" noWrap>
      <Aside logs={logs} player={currentPlayer} />

      <Board
        onStart={onStart}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        handCards={handCards}
        playedCards={playedCards}
        drawPile={drawPile}
        players={players}
        gameActive={gameActive}
      />
    </Group>
  );
}
