import { createSlice } from '@reduxjs/toolkit';
import { getMatchDetails } from '../services/api';

interface MatchDetailsState {
  match: Match | null;
  loading: boolean;
  error: string | null;
}

const initialState: MatchDetailsState = {
  match: null,
  loading: false,
  error: null,
};

export const matchDetailsSlice = createSlice({
  name: 'matchDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMatchDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMatchDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.match = action.payload;
        state.error = null;
      })
      .addCase(getMatchDetails.rejected, (state, action) => {
        state.loading = false;
        state.match = null;
        state.error = action.error.message ?? 'Failed to fetch match details';
      });
  },
});

export default matchDetailsSlice.reducer;
