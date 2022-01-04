import { createSlice } from '@reduxjs/toolkit';
import initialState, { COUNTER_NAMESPACE } from './initialState';
import reducers from './reducers';
import { fetchWait } from './thunks';

export const counterSlice = createSlice({
  name: COUNTER_NAMESPACE,
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchWait.fulfilled, reducers.increment);
  },
});

export const { decrement, increment, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
