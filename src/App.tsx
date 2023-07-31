import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import MainMenu from './features/main-menu/components/main-menu'
import {AppProvider} from './providers/providers'

export default function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainMenu />} />
					{/* <Route path="/" element={<HomePage />} />
				<Route path="/game" element={<GamePage />} />
				<Route path="/deck" element={<DeckCarousel />} /> */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	)
}
