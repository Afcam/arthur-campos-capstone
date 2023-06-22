import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.scss';
import LobbyPage from './pages/LobbyPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game" element={<GamePage />} />
        {/* <Route path="/rules" element={<RulesPage />} /> */}
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
