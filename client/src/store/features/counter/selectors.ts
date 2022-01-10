import { RootState } from '../..';
import { type CounterState, COUNTER_NAMESPACE } from './initialState';

const getLocalState = (state: RootState) =>
  state[COUNTER_NAMESPACE] as CounterState;

export const getCount = (rootState: RootState) => {
  const state = getLocalState(rootState);
  return state.value;
};
