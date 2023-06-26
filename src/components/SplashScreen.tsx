import { useState } from 'react';
import { Timeline, Text, Input, Button, Group, Stack, Paper, Space } from '@mantine/core';
import { IconPlus, IconGitPullRequest, IconMessageDots, IconFileInfo } from '@tabler/icons-react';

function RoomCreationForm({
  username,
  setUsername,
  onSubmit,
}: {
  username: string;
  setUsername: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <Paper w="250px" shadow="xs" radius="md" p="md" mt="md" withBorder>
      <Stack>
        <Input
          value={username}
          placeholder="USERNAME"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <Button compact onClick={onSubmit}>
          <Text fz="sm">Enter as </Text>
          <Space w="xs" />
          <Text fw={700}>{username}</Text>
        </Button>
      </Stack>
    </Paper>
  );
}

function RoomJoiningForm({
  roomUUID,
  onRoomUUIDChange,
  onMenuStateChange,
}: {
  roomUUID: string;
  onRoomUUIDChange: (value: string) => void;
  onMenuStateChange: () => void;
}) {
  return (
    <Paper w="250px" shadow="xs" radius="md" p="md" mt="md" withBorder>
      <Stack>
        <Input
          value={roomUUID}
          placeholder="GAME ROOM ID"
          onChange={(e) => {
            onRoomUUIDChange(e.target.value);
          }}
        />

        <Button compact onClick={onMenuStateChange}>
          <Text fz="sm">Commit to </Text>
          <Space w="xs" />
          <Text fw={700}>{`gitclash/ ${roomUUID || ''}`}</Text>
        </Button>
      </Stack>
    </Paper>
  );
}

export default function SplashScreen({
  onSubmit,
}: {
  onSubmit: (username: string, avatar: string, room?: string) => void;
}) {
  const [roomUUID, setRoomUUID] = useState('');
  const [username, setUsername] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const [menuState, setMenuState] = useState(0);

  return (
    <>
      {menuState === 1 ? (
        <RoomCreationForm
          username={username}
          setUsername={setUsername}
          onSubmit={() => {
            onSubmit(username, 'avatar', roomUUID);
          }}
        />
      ) : (
        <Timeline
          w={'100%'}
          bulletSize="1.5rem"
          lineWidth={2}
          radius="md"
          active={activeStep}
          reverseActive
        >
          <Timeline.Item
            onClick={() => {
              setActiveStep(2);
            }}
            bullet={<IconPlus size="1rem" />}
            title="Create new..."
          >
            <Text color="dimmed" size="sm">
              Create a new room to play
            </Text>

            {activeStep === 2 && (
              <Group position="center" mt="md">
                <Button
                  leftIcon={<IconPlus />}
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
            bullet={<IconGitPullRequest size="1rem" />}
            lineVariant="dashed"
            onClick={() => {
              setActiveStep(1);
            }}
          >
            <Text color="dimmed" size="sm">
              Join a room with an id
            </Text>

            {activeStep === 1 && (
              <RoomJoiningForm
                roomUUID={roomUUID}
                onRoomUUIDChange={setRoomUUID}
                onMenuStateChange={() => {
                  setMenuState(1);
                }}
              />
            )}
          </Timeline.Item>

          <Timeline.Item
            onClick={() => {
              setActiveStep(0);
            }}
            title="Code review"
            bullet={<IconMessageDots size="1rem" />}
          >
            <Text color="dimmed" size="sm">
              Check out the game rules
            </Text>
            {activeStep === 0 && (
              <Group position="right" mt="md">
                <Button leftIcon={<IconFileInfo />}>Rules</Button>
              </Group>
            )}
          </Timeline.Item>
        </Timeline>
      )}
    </>
  );
}
