import { configureStore } from '@reduxjs/toolkit';
import counterReducers from './features/counter';
import { COUNTER_NAMESPACE } from './features/counter/initialState';
import randomReducers from './features/random';
import { RANDOM_NAMESPACE } from './features/random/initialState';
import usersReducers from './features/users';
import { USERS_NAMESPACE } from './features/users/initialState';

export const store = configureStore({
  reducer: {
    [COUNTER_NAMESPACE]: counterReducers,
    [RANDOM_NAMESPACE]: randomReducers,
    [USERS_NAMESPACE]: usersReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
