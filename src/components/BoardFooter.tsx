import { Footer, Group, Text } from '@mantine/core';
import { IconLockAccess, IconLockOpen } from '@tabler/icons-react';

interface Props {
  roomUUID: string;
}

export default function BoardFooter({ roomUUID }: Props) {
  return (
    <Footer height={60} p="md">
      <Group>
        {/* <IconLockAccess /> */}
        <IconLockOpen />
        <Text>{roomUUID}</Text>
      </Group>
    </Footer>
  );
}
