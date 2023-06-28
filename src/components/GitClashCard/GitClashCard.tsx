import {
  Stack,
  Card,
  Badge,
  AspectRatio,
  Paper,
  Group,
  Text,
  HoverCard,
} from '@mantine/core';
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
// openDelay={500}
function GitReset() {
  return (
    <HoverCard width={280}>
      <HoverCard.Target>
        <Card shadow="sm" radius="md" withBorder h="100%" c="green">
          <Stack w="100%" h="100%">
            <Group position="left" noWrap spacing="xs">
              <Icon24Hours />
              <Text fz="md">Git Reset</Text>
            </Group>
            <Paper withBorder radius="lg" c="green">
              <Icon24Hours size="100%" />
            </Paper>
          </Stack>
        </Card>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Text size="sm">
          Hover card is revealed when user hovers over target element, it will
          be hidden once mouse is not over both target and dropdown elements
        </Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

function GitCherryPick() {
  return (
    <Card shadow="sm" radius="md" withBorder h="100%" c="orange">
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconGitCherryPick />
          <Text fz="md">Cherry Pick</Text>
        </Group>
        <Paper withBorder radius="lg" c="orange">
          <IconGitCherryPick size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}

function GitBlame() {
  return (
    <Card shadow="sm" radius="md" withBorder h="100%">
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
    <Card shadow="sm" radius="md" withBorder h="100%" c="purple">
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconBracesOff />
          <Text fz="md">Git Ignore</Text>
        </Group>
        <Paper withBorder radius="lg" c="purple">
          <IconBracesOff size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}
function GitStash() {
  return (
    <Card shadow="sm" radius="md" withBorder h="100%" c="blue">
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconInbox />
          <Text fz="md">Git Stash</Text>
        </Group>
        <Paper withBorder radius="lg" c="blue">
          <IconInbox size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}
function GitMerge() {
  return (
    <Card shadow="sm" radius="md" withBorder h="100%" c="violet">
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconGitMerge />
          <Text fz="md">Git Merge</Text>
        </Group>
        <Paper withBorder radius="lg" c="violet">
          <IconGitMerge size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}

function Bug() {
  return (
    <Card shadow="sm" radius="md" withBorder h="100%" c="red">
      <Stack w="100%" h="100%">
        <Group position="left" noWrap spacing="xs">
          <IconExclamationCircle />
          <Text fz="md">BUG</Text>
        </Group>
        <Paper withBorder radius="lg" c="red">
          <IconExclamationCircle size="100%" />
        </Paper>
      </Stack>
    </Card>
  );
}

function Placeholder({ number }: { number?: number }) {
  return (
    <Card shadow="sm" radius="md" withBorder p="xs" h="100%">
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
  onClick,
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
  onClick: () => void;
}) {
  const className = stack ? 'card card--stack' : 'card';

  return (
    <HoverCard shadow="md" openDelay={700} withArrow position="top">
      <HoverCard.Target>
        <AspectRatio ratio={63 / 88} w={w} miw="30px" className={className}>
          <div onClick={onClick}>
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
          </div>
        </AspectRatio>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Text size="sm">
          {type === 'Git Reset'
            ? 'Discard all cards in your hand and draw a fresh set.'
            : type === 'Git Cherry-Pick'
            ? "Steal a specific card from another player's hand"
            : type === 'Git Blame'
            ? 'Force any player to reveal their hand'
            : type === 'Git Ignore'
            ? 'Negate the effect of any action card played against you'
            : type === 'Git Stash'
            ? 'Hide a card from your hand and draw a new card. Retrieve the stashed card at any time'
            : type === 'Git Merge'
            ? "Steal a random card from another player's hand"
            : type === 'Bug'
            ? 'Unless you have a Git Reset, your code crashes and you are out of the game'
            : 'Sometimes you just need a placeholder'}
        </Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
