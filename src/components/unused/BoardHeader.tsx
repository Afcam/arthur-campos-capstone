import { useState } from 'react';
import { Header, Text, MediaQuery, Burger, useMantineTheme, Flex } from '@mantine/core';
import ToggleTheme from '../ToggleTheme';

export default function BoardHeader() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Flex justify="space-between" align="center">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => {
              setOpened((o) => !o);
            }}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Text>Application header</Text>

        <ToggleTheme />
      </Flex>
    </Header>
  );
}
