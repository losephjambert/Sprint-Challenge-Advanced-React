import React from 'react';
import { render } from '@testing-library/react';
import PlayerCard from './PlayerCard';

const name = 'Marta';
const country = 'Brazil';
const searches = 18;

test('Display renders without crashing', () => {
  render(<PlayerCard name={name} country={country} searches={searches} />);
});

test('PlayerCard renders props', () => {
  const playerName = new RegExp(name, 'i');
  const playerCountry = new RegExp(country, 'i');
  const playerSearches = new RegExp(searches, 'i');
  const { getByTestId } = render(<PlayerCard name={name} country={country} searches={searches} />);

  expect(getByTestId('player-name').textContent).toMatch(playerName);
  expect(getByTestId('player-country').textContent).toMatch(playerCountry);
  expect(getByTestId('player-searches').textContent).toMatch(playerSearches);
});
