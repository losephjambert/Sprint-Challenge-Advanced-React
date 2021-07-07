import React from 'react';

const PlayerCard = ({ name, country, searches }) => {
  return (
    <figure>
      <h3 data-testid='player-name'>{name}</h3>
      <p data-testid='player-country'>{country}</p>
      <p>
        Searches: <span data-testid='player-searches'>{searches}</span>
      </p>
    </figure>
  );
};

export default PlayerCard;
