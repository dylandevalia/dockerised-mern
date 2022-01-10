/* eslint-disable no-param-reassign */
import User from '../../../types/user';
import type { UsersState } from './initialState';

export default {
  setUsers: (state: UsersState, { payload }: { payload: User[] }) => {
    state.users = payload;
  },
};
