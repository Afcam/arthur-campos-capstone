import {useLocalStorage} from '@mantine/hooks'
import {
	MantineProvider,
	ColorSchemeProvider,
	createEmotionCache,
	type ColorScheme,
} from '@mantine/core'

const myCache = createEmotionCache({key: 'gitclash'})

interface ProvidersProps {
	children: React.ReactNode
}

export function AppProvider({children}: ProvidersProps) {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'gitclash-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	})

	const toggleColorScheme = (value?: ColorScheme) => {
		setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'))
	}

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				emotionCache={myCache}
				theme={{colorScheme}}
				withGlobalStyles
				withNormalizeCSS
			>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>
	)
}
