import {
  Stack,
  Flex,
  Card,
  Badge,
  Group,
  Paper,
  Avatar,
  Title,
  Divider,
  Center,
  AspectRatio,
  Text,
  ScrollArea,
} from '@mantine/core';

import './BoardGame.scss';
import {
  IconBrandGit,
  IconPhoto,
  IconUpload,
  IconX,
} from '@tabler/icons-react';

const GitClashCard = () => {
  const cards = Array(20).fill(null);

  return (
    <Group spacing="0">
      {cards.map((_, index) => (
        <AspectRatio key={index} ratio={63 / 88} w={'200px'} className="card">
          <Card shadow="sm" radius="md" withBorder>
            <Stack justify="space-between" h="100%">
              <IconBrandGit size="100%" />

              <Badge>{index}</Badge>
            </Stack>
            {/* <Center mx="auto">
          </Center> */}
          </Card>
        </AspectRatio>
      ))}
    </Group>
  );
};

const UserCards = () => {
  const cards = Array(7).fill(null);

  return (
    <Group spacing="0" noWrap>
      {cards.map((_, index) => (
        <AspectRatio key={index} ratio={63 / 88} w={'30px'}>
          <Card p={0} shadow="sm" radius="md" withBorder className="card">
            <Center mx="auto">
              <Stack spacing="0" justify="center" h="100%">
                <IconBrandGit size="1rem" />
                <Text align="center" fz="xs">
                  {index}
                </Text>
              </Stack>
            </Center>
          </Card>
        </AspectRatio>
      ))}
    </Group>
  );
};

const Users = () => {
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
              <UserCards />
            </Stack>
          </Group>
        </Card>
      ))}
    </Stack>
  );
};

export default function BoardGame({ username }) {
  // const [drawPile, setDrawPile] = useState([]);
  // const [discardPile, setdDiscardPile] = useState([]);
  return (
    <Stack h={'100%'}>
      <Flex h="100%" gap="md">
        <Paper shadow="xs" withBorder w="100%" h="100%">
          <Group position="center" p="md" h="100% ">
            <GitClashCard />
            <GitClashCard />
          </Group>
        </Paper>
        <Paper shadow="xs" p="md" withBorder w="33%" h="100%">
          <ScrollArea h="60vh">
            <Users />
          </ScrollArea>
        </Paper>
      </Flex>

      <Paper shadow="xs" withBorder w="100%" h="33%">
        <Badge
          pl={0}
          size="lg"
          color="teal"
          radius="xl"
          leftSection={
            <Avatar src={null} alt="Vitaly Rtishchev" color="red">
              VR
            </Avatar>
          }
        >
          {username}
        </Badge>
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
