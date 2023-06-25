import {
  MediaQuery,
  Navbar,
  ScrollArea,
  Title,
  Space,
  Stack,
  Paper,
  useMantineTheme,
  Group,
  Avatar,
} from '@mantine/core';

import { Activities } from './Activities';
import { UserAvatar } from './UserAvatar';
import { IconSwords } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function NavHome() {
  return (
    <Paper shadow="xs" p="md">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Group w="200px" position="apart">
          <Title order={1}>Git Clash</Title>
          <IconSwords />
        </Group>
      </Link>
    </Paper>
  );
}

function NavActivities(props: { recentActivities: any }) {
  return (
    <Paper shadow="xs" p="md" h="100%" radius="md">
      <Stack pos="relative">
        <Title order={2}>Recent Activities</Title>
        <Space h="md" />
        <ScrollArea h="500px">
          <Activities recentActivities={props.recentActivities} />
        </ScrollArea>
      </Stack>
    </Paper>
  );
}

function NavUser({ username }) {
  return (
    <Paper shadow="xs" p="md">
      <Group>
        <Avatar
          radius="md"
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
        <Title order={5}>{username}</Title>
      </Group>
    </Paper>
  );
}
// type Props = Array<{
//   type: string;
//   icon: JSX.Element;
//   title: string;
//   comment: string;
//   command: string;
// }>;

// eslint-disable-next-line react/prop-types
export default function BoardNavbar({ recentActivities, username }) {
  const theme = useMantineTheme();

  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Navbar
        styles={{
          root: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        p="md"
        hiddenBreakpoint="sm"
        width={{ sm: 200, lg: 300 }}
        withBorder={false}
      >
        <Navbar.Section>
          <NavHome />
        </Navbar.Section>

        <Navbar.Section grow mt="md">
          <NavActivities recentActivities={recentActivities} />
        </Navbar.Section>

        <Navbar.Section mt="md">
          <NavUser username={username} />
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
}
