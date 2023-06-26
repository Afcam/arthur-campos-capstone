import { Center, Stack, Text, Title } from '@mantine/core';

interface Props {
  message?: string;
}

export default function NotFound({ message }: Props) {
  return (
    <Center w="100vw" h="100vh">
      <Stack align="center">
        <Title size="5em">4 0 4</Title>
        <Text fs="2em" fw={700}>
          Page Not Found
        </Text>
        {message ?? <Text fs="1em">{message}</Text>}
      </Stack>
    </Center>
  );
}
