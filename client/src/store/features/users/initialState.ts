import User from '../../../types/user';

export const USERS_NAMESPACE = 'users';

export interface UsersState {
  users: Array<User>;
}

export default {
  users: [],
} as UsersState;
