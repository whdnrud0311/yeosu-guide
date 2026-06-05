import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Globe, Palette } from 'lucide-react';
import { useThemeStore } from "./stores/useThemeStore";

import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Attractions from './pages/Attractions';
import Transport from './pages/Transport';
import AiCourse from './pages/AiCourse';
import OceanView from './pages/OceanView';
import Help from './pages/Help';

const themeVars: Record<string, Record<string, string>> = {
  ocean: { '--bg': '#0a1628', '--card': '#112240', '--accent': '#64ffda', '--text': '#ccd6f6', '--sub': '#8892b0' },
  night: { '--bg': '#1a0a2e', '--card': '#2d1b4e', '--accent': '#f472b6', '--text': '#e2d9f3', '--sub': '#a78bfa' },
  practical: { '--bg': '#f5f5f5', '--card': '#ffffff', '--accent': '#2563eb', '--text': '#1e293b', '--sub': '#64748b' },
};

function ThemeInjector() {
  const theme = useThemeStore((s) => s.theme);
  useEffect(() => {
    const vars = themeVars[theme];
    Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }, [theme]);
  return null;
}

const titleMap: Record<string, string> = {
  '/restaurants': 'nav.restaurants',
  '/attractions': 'nav.attractions',
  '/transport': 'nav.transport',
  '/ai-course': 'nav.aiCourse',
  '/ocean-view': 'nav.oceanView',
  '/help': 'nav.help',
};
// ⬆️ '/expo': 'nav.expo' 삭제 완료

export default function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useThemeStore();

  const [showLang, setShowLang] = useState(false);
  const [showTheme, setShowTheme] = useState(false);

  const isHome = location.pathname === '/';
  const pageTitle = titleMap[location.pathname];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLang(false);
  };

  const changeTheme = (t: string) => {
  setTheme(t as 'ocean' | 'night' | 'practical');
};

  return (
    <>
      <ThemeInjector />

      {/* Header */}
      <header className="app-header">
        <div className="header-left">
          {!isHome && (
            <button className="icon-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={22} />
            </button>
          )}
        </div>
        <h1 className="header-title">
          {isHome ? t('app.title') : pageTitle ? t(pageTitle) : t('app.title')}
        </h1>
        <div className="header-right">
          <button className="icon-btn" onClick={() => { setShowLang(!showLang); setShowTheme(false); }}>
            <Globe size={20} />
          </button>
          <button className="icon-btn" onClick={() => { setShowTheme(!showTheme); setShowLang(false); }}>
            <Palette size={20} />
          </button>
        </div>
      </header>

      {/* Language Modal */}
      {showLang && (
        <div className="dropdown-modal" onClick={() => setShowLang(false)}>
          <div className="dropdown-content" onClick={(e) => e.stopPropagation()}>
            {[ ['ko', '🇰🇷 한국어'], ['en', '🇺🇸 English'], ['ja', '🇯🇵 日本語'], ['zh', '🇨🇳 中文'] ].map(([code, label]) => (
              <button
                key={code}
                className={i18n.language === code ? 'active' : ''}
                onClick={() => changeLanguage(code)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Theme Modal */}
      {showTheme && (
        <div className="dropdown-modal" onClick={() => setShowTheme(false)}>
          <div className="dropdown-content" onClick={(e) => e.stopPropagation()}>
            {[ ['ocean', '🌊 Ocean'], ['night', '🌙 Night'], ['practical', '☀️ Light'] ].map(([key, label]) => (
              <button
                key={key}
                className={theme === key ? 'active' : ''}
                onClick={() => changeTheme(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pages */}
      <main className="app-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/attractions" element={<Attractions />} />
              <Route path="/transport" element={<Transport />} />
              <Route path="/ai-course" element={<AiCourse />} />
              <Route path="/ocean-view" element={<OceanView />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}
