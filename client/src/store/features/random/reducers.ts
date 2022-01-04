/* eslint-disable no-param-reassign */
import type { RandomState } from './initialState';

export default {
  setValue: (state: RandomState, { payload }: { payload: number }) => {
    state.value = payload;
  },
  reset: (state: RandomState) => {
    state.value = 0;
  },
};
