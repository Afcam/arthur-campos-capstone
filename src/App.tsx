import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MantineProvider,
  ColorSchemeProvider,
  type ColorScheme,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import LobbyPage from './pages/LobbyPage';
// import RulesPage from './pages/RulesPage';
// import DeckCarousel from './components/DeckCarousel/DeckCarousel';
// import './App.scss';

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  // const toggleColorScheme = (value?: ColorScheme) =>
  // setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            {/* <Route path="/lobby" element={<LobbyPage />} />
            <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/rules" element={<RulesPage />} />
            <Route path="/card" element={<DeckCarousel />} /> */}
            <Route path="*" element={<h2>Not Found</h2>} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
