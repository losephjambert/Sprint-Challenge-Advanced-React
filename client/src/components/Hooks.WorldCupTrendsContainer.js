import React from 'react';
import { useAsyncFetch } from '../hooks/useFetch';
import PlayerCard from './PlayerCard';

import * as urls from '../api/urls';

const HooksWorldCupTrendsContainer = () => {
  const [players, error, fetchNextPage] = useAsyncFetch(urls.baseURL + urls.playersURL);
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
        {error && errorMessage}
        {players.map(player => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </section>
    </>
  );
};

export default HooksWorldCupTrendsContainer;
