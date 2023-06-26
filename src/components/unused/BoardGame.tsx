import { Stack, Flex, Group, Paper, Center, ScrollArea } from '@mantine/core';

import GitClashCardDeck from '../GitClashCardDeck';
import Users from './Users';

function DecArea() {
  return (
    <Paper shadow="xs" withBorder w="100%" h="66vh">
      <Group position="center" p="md" h="100%" spacing="xl">
        <Group spacing="0">
          <GitClashCardDeck numberOfCards={20} stack={true} w="200px" />
        </Group>
        <Group spacing="0">
          <GitClashCardDeck numberOfCards={2} stack={true} w="200px" />
        </Group>
      </Group>
    </Paper>
  );
}

function Players() {
  return (
    <Paper shadow="xs" p="md" withBorder w="33%" h="66vh">
      <Center h="100%">
        <ScrollArea h="60vh">
          <Users />
        </ScrollArea>
      </Center>
    </Paper>
  );
}

function PlayerCards() {
  return (
    <Paper shadow="xs" withBorder h="33%">
      <Center h="100%">
        <Group spacing="md" position="center" noWrap>
          <GitClashCardDeck numberOfCards={7} stack={false} w="100px" />
        </Group>
      </Center>
    </Paper>
  );
}

export default function BoardGame() {
  return (
    <Stack>
      <Flex h="33%" gap="md">
        <DecArea />
        <Players />
      </Flex>

      <PlayerCards />
    </Stack>
  );
}
