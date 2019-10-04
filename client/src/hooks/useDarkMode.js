import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = bool => {
  const [darkMode, setDarkMode] = useLocalStorage('darkmode', bool);

  useEffect(() => {
    const body = document.body;
    darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
