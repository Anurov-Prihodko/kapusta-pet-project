import { createAsyncThunk } from '@reduxjs/toolkit';

import kapustaSummaryAPI from '../../services/kapustaSummaryAPI';

const getTransactionsAnnual = createAsyncThunk(
  'summary/getTransactionsAnnual',
  async (year, { rejectWithValue }) => {
    try {
      const transactionsAnnual = await kapustaSummaryAPI
        .fetchTransactionsAnnual(year)
        .then(({ data }) => data);

      return transactionsAnnual;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export { getTransactionsAnnual };
