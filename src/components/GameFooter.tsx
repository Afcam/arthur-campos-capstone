import { Avatar, Flex, Footer, Group, Paper, Text, UnstyledButton, Button } from '@mantine/core';
import { IconLockAccess, IconLockOpen } from '@tabler/icons-react';
import ToggleTheme from './ToggleTheme';

interface Props {
  player: {
    player_uuid: string;
    room_uuid: string;
    username: string;
    avatar: string;
  };
}

export default function GameFooter({ player }: Props) {
  return (
    <Footer height={80} py="xs" px="xl">
      <Flex justify="space-between" align="center" h="100%">
        <Paper>
          <Button variant="light" color="gray" radius="md" p="xs" h="100%">
            <Group>
              <Avatar size={40} color="blue" src={player.avatar} />
              <div>
                <Text>{player.username}</Text>
                <Text size="xs" color="dimmed">
                  {/* {player.avatar} */}
                </Text>
              </div>
            </Group>
          </Button>
        </Paper>

        <Group>
          {/* <IconLockAccess /> */}
          <IconLockOpen />
          <Text>{player.room_uuid}</Text>
        </Group>
        <ToggleTheme />
      </Flex>
    </Footer>
  );
}
<Group noWrap position="right">
  <Paper shadow="sm" p="xs" radius="sm" withBorder>
    <ToggleTheme />
  </Paper>
</Group>;
