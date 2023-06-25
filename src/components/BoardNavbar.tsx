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
} from '@mantine/core';
import { IconGitCommit } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
// import socket from '@/lib/socket';

type Props = Array<{
  type: string;
  icon: JSX.Element;
  title: string;
  comment: string;
  command: string;
}>;

export default function BoardNavbar({ recentActivities }: Props) {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Title order={2}>Recent Activities</Title>
        <Space h="md" />

        <ScrollArea h={'100%'} px="md">
          <Stack justify="flex-end">
            <Timeline
              active={recentActivities.size}
              bulletSize={24}
              lineWidth={2}
              reverseActive
            >
              {recentActivities.map((item, index) => {
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
          </Stack>
        </ScrollArea>
      </Navbar>
    </MediaQuery>
  );
}
