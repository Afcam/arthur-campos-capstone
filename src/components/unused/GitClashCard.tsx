import { Stack, Card, Badge, AspectRatio } from '@mantine/core';
import { IconBrandGit } from '@tabler/icons-react';

interface Props {
  number: number;
  stack: boolean;
  w: number | string;
}

export default function GitClashCard({
  number = 0,
  stack = true,
  w = '30px',
}: Props) {
  const className = stack ? 'card card--stack' : 'card';

  return (
    <AspectRatio ratio={63 / 88} w={w} miw="30px" className={className}>
      <Card shadow="sm" radius="md" withBorder p="xs">
        <Stack justify="space-around" h="100%" spacing={'0'}>
          <IconBrandGit size="100%" />
          <Badge radius="md" size="md">
            {number}
          </Badge>
        </Stack>
      </Card>
    </AspectRatio>
  );
}
