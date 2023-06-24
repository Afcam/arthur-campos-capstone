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

import DeckCarousel from './DeckCarousel/DeckCarousel';
import BoardCard from './BoardCard';

export default function BoardGame() {
  return (
    <Stack h={'100%'}>
      <Flex h="100%" gap="md">
        <Paper shadow="xs" withBorder w="100%" h="100%">
          <Center h="100%" w="100%">
            Game Board
          </Center>
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
