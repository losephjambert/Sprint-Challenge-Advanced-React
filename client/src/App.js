import React from 'react';
import WorldCupTrendsContainer from './components/WorldCupTrendsContainer';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <WorldCupTrendsContainer />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
