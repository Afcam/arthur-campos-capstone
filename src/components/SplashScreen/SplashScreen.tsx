import { useState } from 'react';
import {
  Timeline,
  Text,
  Input,
  Button,
  Group,
  ActionIcon,
  Space,
} from '@mantine/core';
import {
  IconGitBranch,
  IconGitPullRequest,
  IconPlus,
  IconMessageDots,
  IconFileInfo,
  IconPlayerPlay,
} from '@tabler/icons-react';

interface Props {
  newGame: () => void;
  joinGame: (roomUUID: string) => void;
}

export default function SplashScreen({ newGame, joinGame }: Props) {
  const [roomUUID, setRoomUUID] = useState('');
  const [activeState, setActiveState] = useState(1);
  return (
    <Timeline
      bulletSize={24}
      lineWidth={2}
      radius="md"
      active={activeState}
      reverseActive
    >
      <Timeline.Item
        onClick={() => {
          setActiveState(2);
        }}
        bullet={<IconGitBranch size={12} />}
        title="Create new..."
      >
        <Text color="dimmed" size="sm">
          Create a new room to play
        </Text>
        <Space h="md" />

        {activeState === 2 && (
          <Group position="center">
            <Button
              leftIcon={<IconPlus />}
              // color="dark"
              onClick={newGame}
            >
              New...
            </Button>
          </Group>
        )}
      </Timeline.Item>

      <Timeline.Item
        title="Make a Pull Request"
        bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
        onClick={() => {
          setActiveState(1);
        }}
      >
        <Text color="dimmed" size="sm">
          Join a room with an id
        </Text>
        <Space h="md" />

        {activeState === 1 && (
          <Group position="right">
            <Input
              value={roomUUID}
              placeholder="GAME ROOM ID"
              onChange={(e) => {
                setRoomUUID(e.target.value);
              }}
            />
            <ActionIcon
              variant="filled"
              onClick={() => {
                joinGame(roomUUID);
              }}
            >
              <IconPlayerPlay />
            </ActionIcon>
          </Group>
        )}
      </Timeline.Item>

      <Timeline.Item
        onClick={() => {
          setActiveState(0);
        }}
        title="Code review"
        bullet={<IconMessageDots size={12} />}
      >
        <Text color="dimmed" size="sm">
          Check out the game rules
        </Text>
        {activeState === 0 && (
          <Group position="right">
            <ActionIcon variant="filled">
              <IconFileInfo />
            </ActionIcon>
          </Group>
        )}
      </Timeline.Item>
    </Timeline>
  );
}
