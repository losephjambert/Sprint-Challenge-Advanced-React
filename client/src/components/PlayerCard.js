import React from 'react';

const PlayerCard = ({ name, country, searches }) => {
  return (
    <figure>
      <h3>{name}</h3>
      <p>{country}</p>
      <p>
        Searches: <span>{searches}</span>
      </p>
    </figure>
  );
};

export default PlayerCard;
