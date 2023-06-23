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
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
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
