import {Center, Stack, Text, Title} from '@mantine/core'

interface Props {
	message?: string
}

export default function NotFound({
	message = 'Sorry, the page you are looking for could not be found.',
}: Props) {
	return (
		<Center w="100vw" h="100vh">
			<Stack align="center">
				<Title size="5em">404</Title>
				<Text size="lg" weight={500}>
					Page Not Found
				</Text>
				<Text size="sm">{message}</Text>
			</Stack>
		</Center>
	)
}
