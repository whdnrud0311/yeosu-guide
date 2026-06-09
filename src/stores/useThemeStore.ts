import { create } from 'zustand';

type Theme = 'ocean' | 'night' | 'practical';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

const themes: Theme[] = ['ocean', 'night', 'practical'];

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'ocean',
  setTheme: (theme) => {
    document.documentElement.setAttribute('data-theme', theme === 'ocean' ? '' : theme);
    set({ theme });
  },
  cycleTheme: () => {
    const current = get().theme;
    const idx = themes.indexOf(current);
    const next = themes[(idx + 1) % themes.length];
    document.documentElement.setAttribute('data-theme', next === 'ocean' ? '' : next);
    set({ theme: next });
  },
}));

// 🔧 페이지 로드 시 초기 테마 적용
document.documentElement.setAttribute('data-theme', '');
