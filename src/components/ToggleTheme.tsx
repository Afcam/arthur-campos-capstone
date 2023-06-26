import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function ToggleTheme({ size = '1.1rem' }: { size?: string }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => {
        toggleColorScheme();
      }}
      title="Toggle color scheme"
      size={size}
    >
      {dark ? <IconSun size={size} /> : <IconMoonStars size={size} />}
    </ActionIcon>
  );
}
