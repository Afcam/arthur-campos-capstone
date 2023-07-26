import {
  Group,
  Footer,
  Title,
  Tooltip,
  Button,
  useMantineTheme,
} from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

export function HomeFooter() {
  const theme = useMantineTheme();

  return (
    <Footer height="fit-content" px="md" py="xs" withBorder={false}>
      <Group position="apart">
        <Title order={6} size="0.75rem">
          © 2023 Afcam
        </Title>
        <Tooltip label="gitclash repository" openDelay={300}>
          <Button
            px="5px"
            compact
            component="a"
            variant="subtle"
            href="https://github.com/Afcam/gitclash"
          >
            <IconBrandGithub
              size="1rem"
              color={theme.colorScheme === 'dark' ? 'white' : 'black'}
            />
          </Button>
        </Tooltip>
      </Group>
    </Footer>
  );
}
