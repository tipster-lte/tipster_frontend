import { combineReducers } from 'redux';
import matchDetailsReducer from './matchDetails';
import predictionReducer from './prediction';

const rootReducer = combineReducers({
  matchDetails: matchDetailsReducer,
  prediction: predictionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
