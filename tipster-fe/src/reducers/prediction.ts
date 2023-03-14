import { createSlice } from '@reduxjs/toolkit';
import { getPrediction } from '../services/api';

interface PredictionState {
  prediction: Prediction | null;
  loading: boolean;
  error: string | null;
}

const initialState: PredictionState = {
  prediction: null,
  loading: false,
  error: null,
};

export const predictionSlice = createSlice({
  name: 'prediction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrediction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPrediction.fulfilled, (state, action) => {
        state.loading = false;
        state.prediction = action.payload;
        state.error = null;
      })
      .addCase(getPrediction.rejected, (state, action) => {
        state.loading = false;
        state.prediction = null;
        state.error = action.error.message ?? 'Failed to fetch match prediction';
      });
  },
});

export default predictionSlice.reducer;
