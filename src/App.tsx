import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.scss';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
