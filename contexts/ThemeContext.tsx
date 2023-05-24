import { createContext } from 'react';

export const ThemeContext = createContext<{
  themeMode: string;
  setTheme: (newMode: string) => void;
}>({ themeMode: 'light', setTheme: () => {} });
