import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Timeline,
  Text,
  Input,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import {
  IconGitBranch,
  IconGitPullRequest,
  IconPlus,
  IconMessageDots,
  IconFileInfo,
  IconPlayerPlay,
} from '@tabler/icons-react';

import './SplashScreen.scss';
import { createGameRoomAPI, joinGameRoomAPI } from '@/utils/api';
import storage from '@/utils/storage';

export default function SplashScreen() {
  const [roomUUID, setRoomUUID] = useState('');
  const [activeState, setActiveState] = useState(2);
  const navigate = useNavigate();

  const handleNewGame = async () => {
    try {
      const token = await createGameRoomAPI();
      storage.setToken(token?.data);
      navigate('/lobby');
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoinGame = async () => {
    try {
      if (roomUUID) {
        const token = await joinGameRoomAPI(roomUUID);
        storage.setToken(token?.data);
        console.log(token);
        // navigate('/lobby');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="splash-screen">
      <div className="splash-screen__timeline">
        <Timeline
          bulletSize={24}
          lineWidth={2}
          radius="md"
          active={activeState}
          reverseActive
        >
          <Timeline.Item
            title="Pull request"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
            onClick={() => {
              setActiveState(2);
            }}
          >
            <Text color="dimmed" size="sm">
              Join someones game room with a room id.
            </Text>

            {activeState === 2 && (
              <Group position="right">
                <Input
                  value={roomUUID}
                  placeholder="GAME ROOM ID"
                  onChange={(e) => {
                    setRoomUUID(e.target.value);
                  }}
                />
                <ActionIcon variant="filled" onClick={handleJoinGame}>
                  <IconPlayerPlay />
                </ActionIcon>
              </Group>
            )}
          </Timeline.Item>
          <Timeline.Item
            onClick={() => {
              setActiveState(1);
            }}
            bullet={<IconGitBranch size={12} />}
            title="Create new..."
          >
            <Text color="dimmed" size="sm">
              Create a new room play.
            </Text>
            {activeState === 1 && (
              <Group position="right">
                <Button
                  leftIcon={<IconPlus />}
                  color="dark"
                  onClick={handleNewGame}
                >
                  New...
                </Button>
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
