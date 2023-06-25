import { Flex, Footer, Group, Text } from '@mantine/core';
import { IconLockAccess, IconLockOpen } from '@tabler/icons-react';
import ToggleTheme from './ToggleTheme';

interface Props {
  roomUUID: string;
}

export default function BoardFooter({ roomUUID }: Props) {
  return (
    <Footer height={60} p="md">
      <Flex justify={'space-between'}>
        <Group>
          {/* <IconLockAccess /> */}
          <IconLockOpen />
          <Text>{roomUUID}</Text>
        </Group>
        <ToggleTheme />
      </Flex>
    </Footer>
  );
}
