import React from 'react';
import WorldCupTrendsContainer from './components/WorldCupTrendsContainer';
import HooksWorldCupTrendsContainer from './components/Hooks.WorldCupTrendsContainer';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HooksWorldCupTrendsContainer />
        {/* <WorldCupTrendsContainer /> */}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
