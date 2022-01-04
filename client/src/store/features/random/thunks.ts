import { createAsyncThunk } from '@reduxjs/toolkit';
import HTTP from '../../../services/HTTP';
import { RANDOM_NAMESPACE } from './initialState';

export const fetchRandom = createAsyncThunk(
  `${RANDOM_NAMESPACE}/random`,
  async () => {
    const res = await HTTP.get('/rnd');
    return res.data.data;
  }
);
