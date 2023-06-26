import { Flex, Footer, Group, Paper, Text } from '@mantine/core';
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
    <Footer height={40} py="xs" px="xl">
      <Flex justify="space-between" align="center" h="100%">
        <Text>ROOM: {player.room_uuid}</Text>
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
