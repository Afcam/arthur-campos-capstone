import {Link} from 'react-router-dom'
import {Group, Title} from '@mantine/core'
import {IconSwords} from '@tabler/icons-react'

export default function GitClashLogo() {
	return (
		<Link
			reloadDocument
			to="/"
			style={{
				textDecoration: 'none',
				color: 'inherit',
			}}
		>
			<Group w="100%" position="center">
				<Title order={1}>Git Clash</Title>
				<IconSwords />
			</Group>
		</Link>
	)
}
