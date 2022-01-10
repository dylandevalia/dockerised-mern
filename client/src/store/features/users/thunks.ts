import { createAsyncThunk } from '@reduxjs/toolkit';
import HTTP from '../../../services/HTTP';
import { USERS_NAMESPACE } from './initialState';

export const fetchUsers = createAsyncThunk(
  `${USERS_NAMESPACE}/users`,
  async () => {
    const res = await HTTP.get('/users');
    return res.data.data.users;
  }
);
