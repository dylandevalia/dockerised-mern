import { createAsyncThunk } from '@reduxjs/toolkit';
import { COUNTER_NAMESPACE } from './initialState';

export const fetchWait = createAsyncThunk(
  `${COUNTER_NAMESPACE}/wait`,
  async (ms: number) => {
    await new Promise((res) => {
      setTimeout(res, ms);
    });
  }
);
