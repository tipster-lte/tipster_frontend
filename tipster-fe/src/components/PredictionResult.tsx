import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

function PredictionResult() {
  const { prediction, loading, error } = useSelector((state: RootState) => state.prediction);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!prediction) {
    return null;
  }

  return (
    <div>
      <h2>Prediction Result</h2>
      <p>The predicted number of goals is {prediction.goals}.</p>
      <p>{prediction.winner} is likely to win the match.</p>
    </div>
  );
}

export default PredictionResult