import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';
import {
  MantineProvider,
  ColorSchemeProvider,
  createEmotionCache,
  type ColorScheme,
} from '@mantine/core';

import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import DeckCarousel from './components/DeckCarousel/DeckCarousel';

const myCache = createEmotionCache({ key: 'gitclash' });
// import AboutPage from './pages/AboutPage';
// import LobbyPage from './pages/LobbyPage';
// import RulesPage from './pages/RulesPage';

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'gitclash-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        emotionCache={myCache}
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/card" element={<DeckCarousel />} />
            <Route path="*" element={<h2>Not Found</h2>} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

// {/* <Route path="/lobby" element={<LobbyPage />} />
// <Route path="/about" element={<AboutPage />} /> */
// {/* <Route path="/rules" element={<RulesPage />} />
