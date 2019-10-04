import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== 'string')
    throw new Error(
      `expected typeof key: ${key} to be 'string', instead typeof ${key} is ${typeof key}. Please provide a 'string' as the first parameter for useLocalStorage()`
    );

  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(localStorage.getItem(key)) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
