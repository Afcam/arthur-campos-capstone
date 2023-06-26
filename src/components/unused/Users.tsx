import { Stack, Card, Group, Avatar, Title, Divider } from '@mantine/core';
import GitClashCardDeck from '../GitClashCardDeck';

export default function Users() {
  const users = Array(7).fill(null);

  return (
    <Stack>
      {users.map((_, index) => (
        <Card key={index} p="xs" shadow="sm" radius="md" withBorder>
          <Group noWrap>
            <Avatar
              radius="md"
              size="lg"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
            />
            <Stack w="100%" spacing="xs">
              <Title order={5}>Username</Title>
              <Divider />
              <Group spacing="md" noWrap>
                <GitClashCardDeck numberOfCards={7} stack={false} w="30px" />
              </Group>
            </Stack>
          </Group>
        </Card>
      ))}
    </Stack>
  );
}
