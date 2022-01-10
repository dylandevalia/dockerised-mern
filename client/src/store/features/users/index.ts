import { createSlice } from '@reduxjs/toolkit';
import initialState, { USERS_NAMESPACE } from './initialState';
import reducers from './reducers';
import { fetchUsers } from './thunks';

export const randomSlice = createSlice({
  name: USERS_NAMESPACE,
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, reducers.setUsers);
  },
});

export const { setUsers } = randomSlice.actions;

export default randomSlice.reducer;
