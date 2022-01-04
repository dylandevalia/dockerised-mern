import { createSlice } from '@reduxjs/toolkit';
import initialState, { RANDOM_NAMESPACE } from './initialState';
import reducers from './reducers';
import { fetchRandom } from './thunks';

export const randomSlice = createSlice({
  name: RANDOM_NAMESPACE,
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchRandom.pending, reducers.reset);
    builder.addCase(fetchRandom.fulfilled, reducers.setValue);
  },
});

export const { setValue, reset } = randomSlice.actions;

export default randomSlice.reducer;
