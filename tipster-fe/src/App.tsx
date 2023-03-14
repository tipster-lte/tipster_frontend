import React from 'react';
import MatchDetailsForm from './components/MatchDetailsForm';
import PredictionResult from './components/PredictionResult'

function App() {
  return (
    <div className="app-container">
      <h1>Prediction App</h1>
      <MatchDetailsForm />
      <PredictionResult />
    </div>
  );
}

export default App;
