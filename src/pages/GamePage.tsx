import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  AppShell,
  MediaQuery,
  Group,
  LoadingOverlay,
  Paper,
  useMantineTheme,
  Stack,
  Title,
  Avatar,
  Text,
  Button,
  Container,
  ScrollArea,
} from '@mantine/core';
import { IconSwords } from '@tabler/icons-react';

import { API_URL } from '@/config/config';
import { io, type Socket } from 'socket.io-client';
import storage from '@/utils/storage';

import GameFooter from '@/components/GameFooter';
import Activities from '@/components/Activities';
import ToggleTheme from '@/components/ToggleTheme';

function Home() {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Group w="100%" position="center">
        <Title order={1}>Git Clash</Title>
        <IconSwords />
      </Group>
    </Link>
  );
}

export default function GamePage() {
  const theme = useMantineTheme();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [playedCards, setPlayedCards] = useState([]);
  const [handCards, setHandCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(undefined);
  const [nextPlayer, setNextPlayer] = useState('');
  // In players i have draw and played
  const [players, setPlayers] = useState([]);
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = storage.getToken();
    if (!token) {
      navigate('/');
    }
    const newSocket: Socket = io(API_URL, {
      auth: { token: `Bearer ${token}` },
    });

    setSocket(newSocket);

    // Listen for 'currentPlayer' event
    newSocket.on('currentPlayer', (player) => {
      setCurrentPlayer(player);
    });

    // Listen for 'currentPlayer' event
    newSocket.on('nextPlayer', (player) => {
      console.log(player);
      setNextPlayer(player);
    });

    // Listen for 'cardPlayed' event
    newSocket.on('handCards', (cards) => {
      console.log(cards);

      setHandCards(cards);
    });

    // Listen for 'cardPlayed' event
    newSocket.on('cardPlayed', ({ player, card }) => {
      setPlayedCards((prevPlayedCards) => [...prevPlayedCards, { player, card }]);
    });

    // Listen for 'players' event
    newSocket.on('players', (playersInfo) => {
      console.log(playersInfo);

      setPlayers(playersInfo);
    });

    // Listen for 'currentPlayer' event
    newSocket.on('joined', (message) => {
      setLogs((prevLog) => [message, ...prevLog]);
    });

    // Listen for 'currentPlayer' event
    newSocket.on('left', (message) => {
      setLogs((prevLog) => [message, ...prevLog]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleStart = async () => {
    if (socket) {
      socket.emit('start');
    }
  };

  if (!currentPlayer) {
    return <LoadingOverlay visible />;
  }

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      footer={<GameFooter player={currentPlayer} />}
    >
      <Group h="100%" noWrap>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Stack w="300px" h="100%">
            <Paper shadow="sm" p="xs" radius="sm" withBorder>
              <Home />
            </Paper>
            <Paper shadow="sm" p="xs" radius="sm" withBorder h="100%">
              <Stack>
                <Title order={2}>Recent Activities</Title>
                <ScrollArea h="65vh" offsetScrollbars>
                  <Activities logs={logs} />
                </ScrollArea>
              </Stack>
            </Paper>
          </Stack>
        </MediaQuery>

        <Stack h="100%" w="100%">
          <Paper shadow="sm" px="xs" py="4px" radius="0" withBorder w="100%">
            <Group noWrap position="apart" grow={false}>
              <Text fz="xs"> gitclash / game / {currentPlayer.room_uuid}</Text>
              <ToggleTheme />
            </Group>
          </Paper>
          <Group noWrap h="100%">
            <Paper shadow="sm" p="xs" radius="sm" withBorder w="66%" h="100%">
              DECK // <Button onClick={handleStart}>START</Button>
            </Paper>

            <Paper shadow="sm" p="xs" radius="sm" withBorder h="100%" w="33%">
              Users
            </Paper>
          </Group>
          <Paper shadow="sm" p="xs" radius="sm" withBorder>
            cards
          </Paper>
        </Stack>
      </Group>
    </AppShell>
  );

  // {
  //   title: 'Initial Commit',
  //   username: '',
  //   message: "You've created new branch from master",
  //   timestamp: new Date(),
  // },
  // return (
  //   <AppShell
  //     layout="alt"
  //     styles={{
  //       main: {
  //         background:
  //           theme.colorScheme === 'dark'
  //             ? theme.colors.dark[8]
  //             : theme.colors.gray[0],
  //       },
  //     }}
  //     asideOffsetBreakpoint="sm"
  //     // header={<BoardHeader />}
  //     navbar={
  //       <BoardNavbar
  //         recentActivities={recentActivities}
  //         username={playerInfo.username}
  //       />
  //     }
  //     footer={<BoardFooter roomUUID={playerInfo.room_uuid} />}
  //   >
  //     <Button onClick={handleStart}>START</Button>
  //     <BoardGame />
  //   </AppShell>
  // );
}

// useEffect(() => {
//   getPlayerInfoAPI().then((response) => {
//     setPlayer(response.data);
//   });
// }, []);

// useEffect(() => {
//   const newSocket: Socket = io(API_URL, {
//     auth: { token: `Bearer ${storage.getToken() ?? ''}` },
//   });

//   setSocket(newSocket);

//   return () => {
//     newSocket.disconnect();
//   };
// }, []);

// // useEffect(() => {
// //   socket?.on('');
// // }, []);

// // socket.on('action', (message) => {
// //   setLogs((prev) => [message, ...prev]);
// // });

// const [playedCards, setPlayedCards] = useState([]);
// const [currentPlayer, setCurrentPlayer] = useState('');
// const [player, setPlayer] = useState(undefined);

// const [logs, setLogs] = useState([
//   {
//     title: 'Initial Commit',
//     username: '',
//     message: "You've created new branch from master",
//     timestamp: new Date(),
//   },
// ]);

// const handleStart = async () => {
//   try {
//     const response = await startGameAPI();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
