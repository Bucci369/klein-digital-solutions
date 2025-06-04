// contexts/ThemeContext.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light'); // Standard-Theme

  useEffect(() => {
    // Beim ersten Laden versuchen, das Theme aus localStorage zu holen
    // oder die Systemeinstellung als Fallback zu nutzen (aber manuell umschaltbar)
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateThemeBasedOnSystem = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) { // Nur wenn keine User-Präferenz gespeichert ist
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Keine gespeicherte Präferenz, Systemeinstellung initial verwenden
      setTheme(prefersDarkQuery.matches ? 'dark' : 'light');
      if (prefersDarkQuery.matches) {
        document.documentElement.classList.add('dark');
      }
    }

    // Listener für Änderungen der Systemeinstellung (optional, für User ohne explizite Wahl)
    // Diesen Listener könntest du auch weglassen, wenn die Wahl immer explizit sein soll.
    prefersDarkQuery.addEventListener('change', updateThemeBasedOnSystem);
    return () => prefersDarkQuery.removeEventListener('change', updateThemeBasedOnSystem);

  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Präferenz speichern
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  // Sicherstellen, dass die Klasse auf document.documentElement beim Theme-Wechsel aktualisiert wird
  useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};