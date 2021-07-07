import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <nav>
        <h1>World Cup Data Trends</h1>
      </nav>
      <div>
        <input type='checkbox' id='darkmodeInput' name='darkmode' onClick={handleDarkMode} defaultChecked={darkMode} />
        <label htmlFor='darkmodeInput'>Darkmode</label>
      </div>
    </div>
  );
};

export default NavBar;
