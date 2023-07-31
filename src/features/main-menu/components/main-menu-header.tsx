import {Flex, Header} from '@mantine/core'
import ToggleTheme from '@/components/ToggleTheme'

export function MainMenuHeader() {
	return (
		<Header height={{base: 50, md: 70}} p="md" withBorder={false}>
			<Flex h="100%" justify="flex-end" align="center">
				<ToggleTheme />
			</Flex>
		</Header>
	)
}
