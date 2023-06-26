import { Stack, Card, Badge, AspectRatio, Paper, Group, Text, HoverCard } from '@mantine/core';
import {
  IconBrandGit,
  IconExclamationCircle,
  IconGitMerge,
  Icon24Hours,
  IconGitCherryPick,
  IconInbox,
  IconAccessPoint,
  IconBracesOff,
} from '@tabler/icons-react';
import './GitClashCard.scss';

function GitReset() {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <Icon24Hours />
          <Text fz="md">Git Reset</Text>
        </Group>
        <Paper withBorder radius="lg">
          <Icon24Hours size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}

function GitCherryPick() {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconGitCherryPick />
          <Text fz="md">Cherry Pick</Text>
        </Group>
        <Paper withBorder radius="lg">
          <IconGitCherryPick size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}

function GitBlame() {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconAccessPoint />
          <Text fz="md">Git Blame</Text>
        </Group>
        <Paper withBorder radius="lg">
          <IconAccessPoint size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}
function GitIgnore() {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconBracesOff />
          <Text fz="md">Git Blame</Text>
        </Group>
        <Paper withBorder radius="lg">
          <IconBracesOff size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}
function GitStash() {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconInbox />
          <Text fz="md">Git Stash</Text>
        </Group>
        <Paper withBorder radius="lg">
          <IconInbox size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}
function GitMerge() {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconGitMerge />
          <Text fz="md">Git Merge</Text>
        </Group>
        <Paper withBorder radius="lg">
          <IconGitMerge size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}

function Bug() {
  return (
    <Card shadow="sm" radius="md" withBorder p="xs">
      <Stack justify="space-around" h="100%" spacing={'0'}>
        <IconExclamationCircle />
      </Stack>
    </Card>
  );
}

function Placeholder({ number }: { number?: number }) {
  return (
    <Card shadow="sm" radius="md" withBorder p="xs">
      <Stack justify="space-around" h="100%" spacing={'0'}>
        <IconBrandGit size="100%" />
        {number && (
          <Badge radius="md" size="md">
            {number}
          </Badge>
        )}
      </Stack>
    </Card>
  );
}

export default function GitClashCard({
  number,
  stack = false,
  w = '30px',
  type = 'placeholder',
}: {
  number?: number;
  stack?: boolean;
  w?: number | string;
  type?:
    | 'placeholder'
    | 'Git Reset'
    | 'Git Cherry-Pick'
    | 'Git Blame'
    | 'Git Ignore'
    | 'Git Stash'
    | 'Git Merge'
    | 'Bug';
}) {
  const className = stack ? 'card card--stack' : 'card';

  return (
    <AspectRatio ratio={63 / 88} w={w} miw="30px" className={className}>
      {type === 'Git Reset' ? (
        <GitReset />
      ) : type === 'Git Cherry-Pick' ? (
        <GitCherryPick />
      ) : type === 'Git Blame' ? (
        <GitBlame />
      ) : type === 'Git Ignore' ? (
        <GitIgnore />
      ) : type === 'Git Stash' ? (
        <GitStash />
      ) : type === 'Git Merge' ? (
        <GitMerge />
      ) : type === 'Bug' ? (
        <Bug />
      ) : (
        <Placeholder number={number} />
      )}
    </AspectRatio>
  );
}
