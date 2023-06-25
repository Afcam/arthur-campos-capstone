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

function SplashJoinRoom(props: {
  roomUUID: string | number | undefined;
  setRoomUUID: (arg0: string) => void;
  setMenuState: (arg0: number) => void;
}) {
  return (
    <Paper w="250px" shadow="xs" radius="md" p="md" mt="md" withBorder>
      <Stack>
        <Input
          value={props.roomUUID}
          placeholder="GAME ROOM ID"
          onChange={(e) => {
            props.setRoomUUID(e.target.value);
          }}
        />

        <Button
          compact
          onClick={() => {
            props.setMenuState(1);
          }}
        >
          <Text fz="sm">Commit to </Text>
          <Space w="xs" />
          <Text fw={700}>{`gitclash/ ${
            props.roomUUID ? props.roomUUID : ''
          }`}</Text>
        </Button>
      </Stack>
    </Paper>
  );
}

function SplashNewGame(props: {
  setRoomUUID: (arg0: string) => void;
  setMenuState: (arg0: number) => void;
}) {
  return (
    <Group position="center" mt="md">
      <Button
        leftIcon={<IconPlus />}
        onClick={() => {
          props.setRoomUUID('');
          props.setMenuState(1);
        }}
      >
        New Game
      </Button>
    </Group>
  );
}

function SplashRules() {
  return (
    <Group position="right" mt="md">
      <Button leftIcon={<IconFileInfo />}>Rules</Button>
    </Group>
  );
}

function SplashUsername(props: {
  username: string | undefined;
  setUsername: (arg0: string) => void;
  onSubmit: (arg0: any, arg1: any) => void;
  roomUUID: any;
}) {
  return (
    <Paper w="250px" shadow="xs" radius="md" p="md" mt="md" withBorder>
      <Stack>
        <Input
          value={props.username}
          placeholder="USERNAME"
          onChange={(e) => {
            props.setUsername(e.target.value);
          }}
        />

        <Button
          compact
          onClick={() => {
            props.onSubmit(props.roomUUID, props.username);
          }}
        >
          <Text fz="sm">Enter as </Text>
          <Space w="xs" />
          <Text fw={700}>{props.username}</Text>
        </Button>
      </Stack>
    </Paper>
  );
}

export default function SplashScreen({ onSubmit }: Props) {
  const [roomUUID, setRoomUUID] = useState('');
  const [username, setUsername] = useState('');
  const [timelineState, setTimelineState] = useState(1);
  const [menuState, setMenuState] = useState(0);

  if (menuState === 1) {
    return (
      <SplashUsername
        onSubmit={onSubmit}
        roomUUID={roomUUID}
        username={username}
        setUsername={setUsername}
      />
    );
  }
  return (
    <Timeline
      w={'100%'}
      bulletSize="1.5rem"
      lineWidth={2}
      radius="md"
      active={timelineState}
      reverseActive
    >
      <Timeline.Item
        onClick={() => {
          setTimelineState(2);
        }}
        bullet={<IconPlus size="1rem" />}
        title="Create new..."
      >
        <Text color="dimmed" size="sm">
          Create a new room to play
        </Text>

        {timelineState === 2 && (
          <SplashNewGame
            setRoomUUID={setRoomUUID}
            setMenuState={setMenuState}
          />
        )}
      </Timeline.Item>

      <Timeline.Item
        title="Make a Pull Request"
        bullet={<IconGitPullRequest size="1rem" />}
        lineVariant="dashed"
        onClick={() => {
          setTimelineState(1);
        }}
      >
        <Text color="dimmed" size="sm">
          Join a room with an id
        </Text>

        {timelineState === 1 && (
          <SplashJoinRoom
            roomUUID={roomUUID}
            setRoomUUID={setRoomUUID}
            setMenuState={setMenuState}
          />
        )}
      </Timeline.Item>

      <Timeline.Item
        onClick={() => {
          setTimelineState(0);
        }}
        title="Code review"
        bullet={<IconMessageDots size="1rem" />}
      >
        <Text color="dimmed" size="sm">
          Check out the game rules
        </Text>
        {timelineState === 0 && <SplashRules />}
      </Timeline.Item>
    </Timeline>
  );
}
