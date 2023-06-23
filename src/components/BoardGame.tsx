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
} from '@mantine/core';

import DeckCarousel from './DeckCarousel/DeckCarousel';
import BoardCard from './BoardCard';

export default function BoardGame() {
  return (
    <Stack justify="space-between" h={'100%'}>
      <Group h={'100%'}>
        {/* <Container fluid>Default container</Container> */}

        <Container fluid px="xs">
          <BoardCard size="xl" />
          xs container with xs horizontal padding
        </Container>

        <Container size="xs">Side Container</Container>
      </Group>

      <Flex
        w={'100%'}
        h={150}
        p={40}
        gap="md"
        // justify="center"
        align="center"
        wrap="nowrap"
      >
        <Avatar src="https://avatars.githubusercontent.com/u/21973765?v=4" />
        <Group position="center" w={'100%'}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </Group>
      </Flex>
    </Stack>
  );
}
