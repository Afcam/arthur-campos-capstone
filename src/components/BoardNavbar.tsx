import { formatTimestamp } from '@/utils/formatDate';
import {
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  Title,
  Timeline,
  Space,
  Stack,
  Card,
  Avatar,
  Paper,
  useMantineTheme,
  Group,
  Accordion,
  rem,
  createStyles,
} from '@mantine/core';
import { IconGitCommit, IconPhoto } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import ToggleTheme from './ToggleTheme';
// import socket from '@/lib/socket';

type Props = Array<{
  type: string;
  icon: JSX.Element;
  title: string;
  comment: string;
  command: string;
}>;

function UserAvatar() {
  return (
    <Group>
      <Avatar
        radius="md"
        size="lg"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      />
      <Title order={5}>Username</Title>
    </Group>
  );
}

function Activitis(props) {
  return (
    <Timeline
      active={props.recentActivities.size}
      bulletSize={24}
      lineWidth={2}
      reverseActive
    >
      {props.recentActivities.map((item, index) => {
        return (
          <Timeline.Item
            key={index}
            bullet={<IconGitCommit size={12} />}
            title={item.title}
          >
            {item.username && (
              <Text color="dimmed" size="sm">
                {item.username}
              </Text>
            )}
            <Space w="xs" />
            <Text color="dimmed" size="sm">
              {item.message}
            </Text>
            <Text size="xs" mt={4}>
              {formatTimestamp(item.timestamp)}
            </Text>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}

export default function BoardNavbar({ recentActivities }: Props) {
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
          <Paper shadow="xs" p="md">
            <ToggleTheme />
          </Paper>
        </Navbar.Section>

        <Navbar.Section grow mt="md">
          <Paper shadow="xs" p="md" h="100%" radius="md">
            <Stack pos="relative">
              <Title order={2}>Recent Activities</Title>
              <Space h="md" />
              <ScrollArea h="500px">
                <Activitis recentActivities={recentActivities} />
              </ScrollArea>
            </Stack>
          </Paper>
        </Navbar.Section>

        <Navbar.Section mt="md">
          <Paper shadow="xs" p="md">
            <UserAvatar />
          </Paper>
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
}
