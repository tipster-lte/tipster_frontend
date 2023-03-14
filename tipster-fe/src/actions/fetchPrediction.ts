import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Prediction } from '../types';
import { getPrediction } from '../api';

export const FETCH_PREDICTION_REQUEST = 'FETCH_PREDICTION_REQUEST';
export const FETCH_PREDICTION_SUCCESS = 'FETCH_PREDICTION_SUCCESS';
export const FETCH_PREDICTION_FAILURE = 'FETCH_PREDICTION_FAILURE';

interface FetchPredictionRequestAction {
  type: typeof FETCH_PREDICTION_REQUEST;
}

interface FetchPredictionSuccessAction {
  type: typeof FETCH_PREDICTION_SUCCESS;
  payload: Prediction;
}

interface FetchPredictionFailureAction {
  type: typeof FETCH_PREDICTION_FAILURE;
  payload: string;
}

export type PredictionAction =
  | FetchPredictionRequestAction
  | FetchPredictionSuccessAction
  | FetchPredictionFailureAction;

export const fetchPrediction = (matchId: string): ThunkAction<void, RootState, null, PredictionAction> => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PREDICTION_REQUEST });

      const prediction = await getPrediction(matchId);

      dispatch({ type: FETCH_PREDICTION_SUCCESS, payload: prediction });
    } catch (error) {
      dispatch({ type: FETCH_PREDICTION_FAILURE, payload: error.message });
    }
  };
};
