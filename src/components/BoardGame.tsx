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
  Accordion,
  createStyles,
  rem,
} from '@mantine/core';

import './BoardGame.scss';
import {
  IconBrandGit,
  IconPhoto,
  IconUpload,
  IconX,
} from '@tabler/icons-react';

const GitClashCard = ({ number = 0, stack = true, w = '30px' }) => {
  const className = stack ? 'card card--stack' : 'card';
  return (
    <AspectRatio ratio={63 / 88} w={w} miw="30px" className={className}>
      <Card shadow="sm" radius="md" withBorder p="xs">
        <Stack justify="space-around" h="100%" spacing={'0'}>
          <IconBrandGit size="100%" />
          <Badge radius="md" size="md">
            {number}
          </Badge>
        </Stack>
      </Card>
    </AspectRatio>
  );
};
const GitClashCardDeck = ({ numberOfCards = 20, stack = true, w }) => {
  const cards = Array(numberOfCards).fill(null);

  return cards.map((_, index) => (
    <GitClashCard key={index} number={index} stack={stack} w={w} />
  ));
  // </Group>
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
              <Group spacing="md" noWrap>
                <GitClashCardDeck numberOfCards={7} stack={false} w="30px" />
              </Group>
            </Stack>
          </Group>
        </Card>
      ))}
    </Stack>
  );
};

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}));
// TODO:Change to acordion
const UserAccordion = () => {
  const { classes } = useStyles();

  return (
    <Accordion
      maw={'100%'}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
      value={'asdf'}
    >
      {/* ... Accordion items */}
      <Accordion.Item value="photos">
        <Accordion.Control icon={<IconPhoto size={rem(20)} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="asdf">
        <Accordion.Control icon={<IconPhoto size={rem(20)} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="sdf">
        <Accordion.Control icon={<IconPhoto size={rem(20)} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default function BoardGame({ username }) {
  // const [drawPile, setDrawPile] = useState([]);
  // const [discardPile, setdDiscardPile] = useState([]);
  return (
    <Stack h={'100%'}>
      <Flex h="100%" gap="md">
        <Paper shadow="xs" withBorder w="100%" h="100%">
          <Group position="center" p="md" h="100%" spacing="xl">
            <Group spacing="0">
              <GitClashCardDeck numberOfCards={20} stack={true} w="200px" />
            </Group>
            <Group spacing="0">
              <GitClashCardDeck numberOfCards={2} stack={true} w="200px" />
            </Group>
          </Group>
        </Paper>
        <Paper shadow="xs" p="md" withBorder w="33%" h="100%">
          <Center h="100%">
            {/* <UserAccordion /> */}
            <ScrollArea h="60vh">
              <Users />
            </ScrollArea>
          </Center>
        </Paper>
      </Flex>

      <Paper shadow="xs" withBorder w="100%" h="33%">
        <Center h="100%">
          <Group spacing="md" position="center" noWrap>
            <GitClashCardDeck numberOfCards={7} stack={false} w="100px" />
          </Group>
        </Center>
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

// const UserCards = () => {
//   const cards = Array(7).fill(null);

//   return (
//     <Group spacing="0" noWrap>
//       {cards.map((_, index) => (
//         <AspectRatio key={index} ratio={63 / 88} h={'30px'}>
//           <Card p={0} shadow="sm" radius="md" withBorder className="card">
//             <Center mx="auto">
//               <Stack spacing="0" justify="center" h="100%">
//                 <IconBrandGit size="1rem" />
//                 <Text align="center" fz="xs">
//                   {index}
//                 </Text>
//               </Stack>
//             </Center>
//           </Card>
//         </AspectRatio>
//       ))}
//     </Group>
//   );
// };
