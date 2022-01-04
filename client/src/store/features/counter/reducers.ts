/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CounterState } from './initialState';

export default {
  increment: (state: CounterState) => {
    state.value += 1;
  },
  decrement: (state: CounterState) => {
    state.value -= 1;
  },
  incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
};
