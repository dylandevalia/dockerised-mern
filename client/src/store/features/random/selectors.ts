import { RootState } from '../..';
import { RANDOM_NAMESPACE, type RandomState } from './initialState';

const getLocalState = (state: RootState) =>
  state[RANDOM_NAMESPACE] as RandomState;

export const getRandom = (rootState: RootState) => {
  const state = getLocalState(rootState);
  return state.value;
};
