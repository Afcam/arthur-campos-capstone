import {
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  Title,
  Timeline,
  Space,
} from '@mantine/core';
import { IconGitCommit } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import socket from '@/lib/socket';

export default function BoardNavbar() {
  // const [recentActivities, setRecentActivities] = useState([]);
  const [recentActivities, setRecentActivities] = useState([
    {
      title: 'Commit',
      username: 'A',
      message: 'Joined the Club',
      timestamp: new Date(),
    },
    {
      title: 'Commit',
      username: 'DDDD',
      message: 'Joined the Club',
      timestamp: new Date(),
    },
  ]);

  useEffect(() => {
    socket.on('joinedRoom', (newActivity) => {
      console.log('Received data:', newActivity);
      setRecentActivities((prevActivities) => [
        ...prevActivities,
        {
          title: newActivity.title,
          username: newActivity.username,
          message: newActivity.message,
          timestamp: new Date(),
        },
      ]);
    });
  }, []);

  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Title order={2}>Recent Activities</Title>
        <Space h="md" />
        <ScrollArea h={'80%'} px="md">
          <Timeline active={1} bulletSize={24} lineWidth={2} reverseActive>
            {recentActivities.map((item, index) => {
              return (
                <Timeline.Item
                  key={index}
                  bullet={<IconGitCommit size={12} />}
                  title={item.title}
                >
                  <Text color="dimmed" size="sm">
                    You&apos;ve created new branch{' '}
                    <Text variant="link" component="span" inherit>
                      fix-notifications
                    </Text>{' '}
                    from master
                  </Text>
                  <Text size="xs" mt={4}>
                    2 hours ago
                  </Text>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </ScrollArea>
      </Navbar>
    </MediaQuery>
  );
}
