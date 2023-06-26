import { Group, Text, Footer, ActionIcon } from '@mantine/core';
import { IconBrandGithubFilled } from '@tabler/icons-react';

export function HomeFooter() {
  return (
    <Footer height={38} px="md" py="xs" withBorder={false}>
      <Group position="apart" align="center" h="100%">
        <Text fz="xs">Afcam</Text>

        <Group>
          <ActionIcon size="xs" component="a" href="https://github.com/Afcam" variant="filled">
            <IconBrandGithubFilled size="0.75rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Footer>
  );
}
