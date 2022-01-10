import { RootState } from '../..';
import { USERS_NAMESPACE, type UsersState } from './initialState';

const getLocalState = (state: RootState) =>
  state[USERS_NAMESPACE] as UsersState;

export const getUsers = (rootState: RootState) => {
  const state = getLocalState(rootState);
  return state.users;
};
