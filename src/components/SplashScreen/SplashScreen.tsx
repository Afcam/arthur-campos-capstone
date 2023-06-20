import { Timeline, Text, Input, Button, Group, ActionIcon } from '@mantine/core';
import {
  IconGitBranch,
  IconGitPullRequest,
  IconPlus,
  IconMessageDots,
  IconFileInfo,
  IconPlayerPlay,
} from '@tabler/icons-react';

import { useRef, useState } from 'react';
import { createGameRoom, joinGameRoom } from '@/utils/api';
import './SplashScreen.scss';

export default function SplashScreen() {
  const [activeState, setActiveState] = useState(1);
  const roomIdRef = useRef();

  const handleNewGame = async () => {
    try {
      const token = await createGameRoom();
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoinGame = async () => {
    try {
      if (roomIdRef.current) {
        const roomId = roomIdRef.current.value;
        const token = await joinGameRoom(roomId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="splash-screen">
      <div className="splash-screen__timeline">
        <Timeline bulletSize={24} lineWidth={2} radius="md" active={activeState} reverseActive>
          <Timeline.Item
            onClick={() => {
              setActiveState(2);
            }}
            bullet={<IconGitBranch size={12} />}
            title="Create new..."
          >
            <Text color="dimmed" size="sm">
              Create a new room play.
            </Text>
            {activeState === 2 && (
              <Group position="right">
                <Button leftIcon={<IconPlus />} color="dark" onClick={handleNewGame}>
                  New...
                </Button>
              </Group>
            )}
          </Timeline.Item>

          <Timeline.Item
            title="Pull request"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
            onClick={() => {
              setActiveState(1);
            }}
          >
            <Text color="dimmed" size="sm">
              Join someones game room with a room id.
            </Text>

            {activeState === 1 && (
              <Group position="right">
                <Input ref={roomIdRef} placeholder="GAME ROOM ID" />
                <ActionIcon variant="filled" onClick={handleJoinGame}>
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
                {/* <Button leftIcon={<IconFileInfo />}>Rules</Button> */}
              </Group>
            )}
          </Timeline.Item>
        </Timeline>
      </div>
    </main>
  );
}
