import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import './LobbyHeader.scss';
import { useNavigate } from 'react-router-dom';

export default function LobbyHeader() {
  const navigate = useNavigate();

  return (
    <header className="lobby-header">
      <Stepper active={1} breakpoint="sm">
        <Stepper.Step label="First step" description="Create or join a room" />
        <Stepper.Step label="Second step" description="Wait for players..." />
        <Stepper.Step label="Final step" description="Start the game" />
      </Stepper>

      <Group position="center" mt="xl">
        <Button
          variant="default"
          onClick={() => {
            navigate('/');
          }}
        >
          RETURN
        </Button>
        <Button
          color="red"
          onClick={() => {
            navigate('/game');
          }}
        >
          START
        </Button>
      </Group>
    </header>
  );
}
