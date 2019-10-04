import React, { useState, useEffect } from 'react';
import { useAsyncFetch } from '../hooks/useFetch';
import PlayerCard from './PlayerCard';
import ScatterChart from './ScatterChart';

import * as urls from '../api/urls';

const HooksWorldCupTrendsContainer = () => {
  const [players, error] = useAsyncFetch(urls.baseURL + urls.playersURL);
  const [chartData, setChartData] = useState();
  useEffect(() => {
    if (players.length > 0) {
      // create data structure for chart and set it to chartData
    }
  }, [players]);

  const errorMessage = (
    <>
      <p>Uh, oh. There was an error fetching the World Cup data.</p>
      <p>Error message: {error}</p>
    </>
  );

  return (
    <>
      <h2>Players</h2>
      <section>
        <ScatterChart />
      </section>
      <section>
        {error && errorMessage}
        {players.map(player => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </section>
    </>
  );
};

export default HooksWorldCupTrendsContainer;
