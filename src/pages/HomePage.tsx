import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppShell,
  Center,
  Flex,
  Space,
  Title,
  Stack,
  Group,
  Text,
  Footer,
  Header,
  ActionIcon,
  useMantineTheme,
} from '@mantine/core';
import { IconSwords, IconBrandGithubFilled } from '@tabler/icons-react';

import { createGameRoomAPI, joinGameRoomAPI } from '@/utils/api';
import storage from '@/utils/storage';
import SplashScreen from '@/components/SplashScreen/SplashScreen';
import ToggleTheme from '@/components/ToggleTheme';

function HomeFooter() {
  return (
    <Footer height={60} p="md" withBorder={false}>
      <Group position="apart">
        <Text fz="xs">Arthur Faria Campos</Text>

        <Group>
          <ActionIcon
            component="a"
            href="https://github.com/Afcam"
            variant="filled"
          >
            <IconBrandGithubFilled />
          </ActionIcon>
        </Group>
      </Group>
    </Footer>
  );
}

function HomeHeader() {
  return (
    <Header
      height={{
        base: 50,
        md: 70,
      }}
      p="md"
      withBorder={false}
    >
      <Flex h="100%" justify="flex-end" align="center">
        <ToggleTheme />
      </Flex>
    </Header>
  );
}

export default function HomePage() {
  const theme = useMantineTheme();

  const navigate = useNavigate();

  const handleSubmit = async (roomUUID: string, username: string) => {
    storage.clearToken();
    try {
      const response =
        roomUUID === ''
          ? await createGameRoomAPI(username)
          : joinGameRoomAPI(roomUUID, username);
      storage.setToken(response?.data);

      navigate(`/game/${roomUUID}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={<HomeHeader />}
      footer={<HomeFooter />}
    >
      <Center h="100%">
        <Stack align="center" w="350px" h="500px">
          <Group>
            <Title order={1}>Git Clash</Title>
            <IconSwords />
          </Group>
          <Space h="xl" />
          <SplashScreen onSubmit={handleSubmit} />
        </Stack>
      </Center>
    </AppShell>

    // <AppShell padding="md" header={<HomeHeader />}>
    //   <Center h="100%">
    //     <Stack align="center">

    //       {gameMode.length === 0 ? (
    //         <SplashScreen
    //           newGame={() => {
    //             setGameMode('new');
    //           }}
    //           joinGame={(roomUUID) => {
    //             setRoomUUID(roomUUID);
    //             setGameMode('join');
    //           }}
    //         />
    //       ) : (
    //         <Paper shadow="xs" p="md">
    //           <Container size="xs" p="xs">
    //             <Input
    //               placeholder="USERNAME"
    //               value={username}
    //               onChange={(e) => {
    //                 setUsername(e.target.value);
    //               }}
    //             />
    //             <Space h="md" />

    //             <Button onClick={handleEnter} fullWidth>
    //               ENTER
    //             </Button>
    //           </Container>
    //         </Paper>
    //       )}
    //     </Stack>
    //   </Center>
    // </AppShell>
  );
}
