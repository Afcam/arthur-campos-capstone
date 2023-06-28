import { useEffect, useState } from 'react';
import {
  Paper,
  Accordion,
  createStyles,
  rem,
  Avatar,
  Title,
  Group,
  Space,
} from '@mantine/core';
import { useSocket } from '@/context/socket';
import GitClashCardDeck from './GitClashCardDeck';

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

interface Players {
  player_uuid: string;
  online: boolean;
  username: string;
  avatar: string;
  cards: number;
}

export function BoardPlayers() {
  const { classes } = useStyles();

  const [players, setPlayers] = useState<Players[] | null>(null);
  const [nextPlayer, setNextPlayer] = useState<string | null>(null);

  const { socket } = useSocket();

  useEffect(() => {
    socket?.on('nextPlayer', (data) => {
      setNextPlayer(data.player_uuid);
    });

    socket?.emit('getPlayersInfo');
    socket?.on('playersInfo', (data) => {
      setPlayers(data);
    });
  }, [socket]);

  return (
    <Paper shadow="sm" p="xs" radius="sm" withBorder h="100%" w="33%">
      <Title> Users</Title>
      <Space h="md" />
      <Accordion
        maw={'100%'}
        mx="auto"
        variant="contained"
        defaultValue={nextPlayer}
        classNames={classes}
        className={classes.root}
        value={nextPlayer}
        onChange={(target) => {
          setNextPlayer(target);
        }}
      >
        {players?.map((p) => (
          <Accordion.Item value={p.player_uuid} key={p.player_uuid}>
            <Accordion.Control icon={<Avatar size={rem(20)} src={p.avatar} />}>
              {p.username}
            </Accordion.Control>
            <Accordion.Panel>
              <Group>
                <GitClashCardDeck
                  numberOfCards={p.cards}
                  stack={false}
                  hasNumber={false}
                  w="40px"
                />
              </Group>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Paper>
  );
}
