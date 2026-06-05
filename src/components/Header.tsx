import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../stores/useThemeStore';
import LanguageModal from './LanguageModal';

export default function Header() {
  const { t } = useTranslation();
  const { theme, cycleTheme } = useThemeStore();
  const [showLang, setShowLang] = useState(false);

  return (
    <header className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between shadow-md">
      <h1 className="text-lg font-bold">{t('app_title')}</h1>
      <div className="flex gap-2">
        <button onClick={cycleTheme} className="px-2 py-1 bg-white/20 rounded text-sm">
          {theme === 'ocean' ? '🌊' : theme === 'night' ? '🌙' : '🌿'}
        </button>
        <button onClick={() => setShowLang(true)} className="px-2 py-1 bg-white/20 rounded text-sm">
          🌐
        </button>
      </div>
      {showLang && <LanguageModal onClose={() => setShowLang(false)} />}
    </header>
  );
}
