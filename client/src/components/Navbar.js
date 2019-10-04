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
      <input type='checkbox' name='darkmode' onClick={handleDarkMode} defaultChecked={darkMode} />
    </div>
  );
};

export default NavBar;
