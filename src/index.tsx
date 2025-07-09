import { Provider } from 'react-redux';
import store from './store';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Glowbal } from "./screens/Glowbal/Glowbal";
import { Hiphopboombox } from "./screens/Hiphopboombox/Hiphopboombox";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MusicPlayerPage } from "./screens/MusicPlayerPage.tsx";
import { MusicPlayerDynamicPage } from "./screens/MusicPlayerDynamicPage.tsx";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }} className="bg-[#f3f3f3] dark:bg-gray-900">
            <Link to="/music-player" className="text-gray-900 dark:text-white">Music Player</Link>
            <Link to="/music-player-dynamic" className="text-gray-900 dark:text-white">Music Player Dynamic</Link>
            <Link to="/hiphopboombox" className="text-gray-900 dark:text-white">Hiphopboombox</Link>
          </nav>
          <Routes>
            <Route path="/" element={<MusicPlayerPage />} />
            <Route path="/music-player" element={<MusicPlayerPage />} />
            <Route path="/music-player-dynamic" element={<MusicPlayerDynamicPage />} />
            <Route path="/hiphopboombox" element={<Hiphopboombox />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);

