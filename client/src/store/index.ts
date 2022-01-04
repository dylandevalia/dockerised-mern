import { configureStore } from '@reduxjs/toolkit';
import counterReducers from './features/counter';
import { COUNTER_NAMESPACE } from './features/counter/initialState';
import randomReducers from './features/random';
import { RANDOM_NAMESPACE } from './features/random/initialState';

export const store = configureStore({
  reducer: {
    [COUNTER_NAMESPACE]: counterReducers,
    [RANDOM_NAMESPACE]: randomReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
