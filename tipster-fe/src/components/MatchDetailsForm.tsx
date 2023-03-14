import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPrediction } from '../actions';
import { MatchDetails } from '../types';

function MatchDetailsForm() {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [matchDate, setMatchDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const matchDetails: MatchDetails = { homeTeam, awayTeam, matchDate };
    dispatch(fetchPrediction(matchDetails));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Home Team:
        <input type="text" value={homeTeam} onChange={(e) => setHomeTeam(e.target.value)} />
      </label>
      <label>
        Away Team:
        <input type="text" value={awayTeam} onChange={(e) => setAwayTeam(e.target.value)} />
      </label>
      <label>
        Match Date:
        <input type="text" value={matchDate} onChange={(e) => setMatchDate(e.target.value)} />
      </label>
      <button type="submit">Predict</button>
    </form>
  );
}

export default MatchDetailsForm;
