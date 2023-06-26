import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';
import {
  MantineProvider,
  ColorSchemeProvider,
  createEmotionCache,
  type ColorScheme,
} from '@mantine/core';

import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import NotFound from './components/NotFound';

const myCache = createEmotionCache({ key: 'gitclash' });

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
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
