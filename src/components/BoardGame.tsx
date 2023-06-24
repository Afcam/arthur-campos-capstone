import {
  Stack,
  Flex,
  Container,
  Box,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Avatar,
  AppShell,
  Navbar,
  Header,
  Paper,
  Center,
} from '@mantine/core';
import { useState, useEffect } from 'react';

import './BoardGame.scss';
import DeckCarousel from './DeckCarousel/DeckCarousel';
import BoardCard from './BoardCard';
import { IconBrandGit } from '@tabler/icons-react';

const cardDeck = () => {
  const cards = [];
  for (let i = 0; i < 20; i++) {
    cards.push(i);
  }
  return cards;
};

const GitClashCard = () => {
  return (
    <Group spacing="0">
      {cardDeck().map((item, index) => (
        <Card
          key={index}
          w="200px"
          h="250px"
          shadow="sm"
          radius="md"
          withBorder
          className="card"
        >
          <Stack justify="space-between" h="100%">
            <IconBrandGit size="100%" />

            <Badge>{index}</Badge>
          </Stack>
          {/* <Center mx="auto">
          </Center> */}
        </Card>
      ))}
    </Group>
  );
};

export default function BoardGame() {
  // const [drawPile, setDrawPile] = useState([]);
  // const [discardPile, setdDiscardPile] = useState([]);
  return (
    <Stack h={'100%'}>
      <Flex h="100%" gap="md">
        <Paper shadow="xs" withBorder w="100%" h="100%">
          <Group position="center" p="md" h="100% ">
            <GitClashCard />
            {/* <GitClashCard /> */}
          </Group>
        </Paper>
        <Paper shadow="xs" withBorder w="33%" h="100%">
          Nice
        </Paper>
      </Flex>

      <Paper shadow="xs" withBorder w="100%" h="33%">
        Nice
      </Paper>
    </Stack>
  );
}

// <Group h={'100%'}>
// {/* <Container fluid>Default container</Container> */}

// <Container fluid px="xs">
//   <BoardCard size="100px" />
//   xs container with xs horizontal padding
// </Container>

// <Container size="xs">Side Container</Container>
// </Group>

// <Flex
// w={'100%'}
// h={150}
// p={40}
// gap="md"
// // justify="center"
// align="center"
// wrap="nowrap"
// >
// <Avatar src="https://avatars.githubusercontent.com/u/21973765?v=4" />
// <Group position="center" w={'100%'}>
//   <BoardCard />
//   <BoardCard />
//   <BoardCard />
//   <BoardCard />
//   <BoardCard />
//   <BoardCard />
// </Group>
// </Flex>
