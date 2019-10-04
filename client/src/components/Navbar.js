import React from 'react';

const NavBar = () => {
  const handleDarkMode = e => {
    console.log('handleDarkMode, ', e.target.checked);
  };

  return (
    <div>
      <nav>
        <h1>World Cup Data Trends</h1>
      </nav>
      <input type='checkbox' name='darkmode' onClick={e => handleDarkMode(e)} />
    </div>
  );
};

export default NavBar;
