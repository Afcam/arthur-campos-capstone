import { formatTimestamp } from '@/utils/formatDate';
import { Text, Timeline, Space } from '@mantine/core';
import { IconGitCommit } from '@tabler/icons-react';

export default function Activities(props) {
  return (
    <Timeline
      active={props.logs.size}
      bulletSize={24}
      lineWidth={2}
      reverseActive
    >
      {props.logs.map((item, index) => {
        return (
          <Timeline.Item
            key={index}
            bullet={<IconGitCommit size={12} />}
            title={item.title}
          >
            {item.username && (
              <Text color="dimmed" size="sm">
                {item.username}
              </Text>
            )}
            <Space w="xs" />
            <Text color="dimmed" size="sm">
              {item.message}
            </Text>
            <Text size="xs" mt={4}>
              {formatTimestamp(item.timestamp)}
            </Text>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}
