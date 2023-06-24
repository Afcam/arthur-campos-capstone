import { useState } from 'react';
import {
  Timeline,
  Text,
  Input,
  Button,
  Group,
  Space,
  Stack,
  Paper,
} from '@mantine/core';
import {
  IconPlus,
  IconGitPullRequest,
  IconMessageDots,
  IconFileInfo,
} from '@tabler/icons-react';

interface Props {
  onSubmit: (roomUUID: string, username: string) => void;
}

export default function SplashScreen({ onSubmit }: Props) {
  const [roomUUID, setRoomUUID] = useState('');
  const [username, setUsername] = useState('');
  const [timelineState, setTimelineState] = useState(1);
  const [menuState, setMenuState] = useState(0);

  if (menuState === 1) {
    return (
      <Paper shadow="xs" p="md">
        <Stack>
          <Input
            value={username}
            placeholder="GAME ROOM ID"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <Button
            compact
            onClick={() => {
              onSubmit(roomUUID, username);
            }}
          >
            <Text fz="sm">Enter as </Text>
            <Space w="xs" />
            <Text fw={700}>{`${username}`}</Text>
          </Button>
        </Stack>
      </Paper>
    );
  }
  return (
    <Timeline
      bulletSize={24}
      lineWidth={2}
      radius="md"
      active={timelineState}
      reverseActive
    >
      <Timeline.Item
        onClick={() => {
          setTimelineState(2);
        }}
        bullet={<IconPlus size={12} />}
        title="Create new..."
      >
        <Text color="dimmed" size="sm">
          Create a new room to play
        </Text>
        <Space h="md" />

        {timelineState === 2 && (
          <Group position="center">
            <Button
              leftIcon={<IconPlus />}
              // color="dark"
              onClick={() => {
                setRoomUUID('');
                setMenuState(1);
              }}
            >
              New Game
            </Button>
          </Group>
        )}
      </Timeline.Item>

      <Timeline.Item
        title="Make a Pull Request"
        bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
        onClick={() => {
          setTimelineState(1);
        }}
      >
        <Text color="dimmed" size="sm">
          Join a room with an id
        </Text>
        <Space h="md" />

        {timelineState === 1 && (
          <Paper shadow="xs" p="md">
            <Stack>
              <Input
                value={roomUUID}
                placeholder="GAME ROOM ID"
                onChange={(e) => {
                  setRoomUUID(e.target.value);
                }}
              />

              <Button
                compact
                onClick={() => {
                  setMenuState(1);
                }}
              >
                <Text fz="sm">Commit to </Text>
                <Space w="xs" />
                <Text fw={700}>{`gitclash/${roomUUID}`}</Text>
              </Button>
            </Stack>
          </Paper>
        )}
      </Timeline.Item>

      <Timeline.Item
        onClick={() => {
          setTimelineState(0);
        }}
        title="Code review"
        bullet={<IconMessageDots size={12} />}
      >
        <Text color="dimmed" size="sm">
          Check out the game rules
        </Text>
        <Space h="md" />

        {timelineState === 0 && (
          <Group position="right">
            <Button leftIcon={<IconFileInfo />}>Rules</Button>
          </Group>
        )}
      </Timeline.Item>
    </Timeline>
  );
}
