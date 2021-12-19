import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import kapustaReportsAPI from '../../services/kapustaReportsAPI';

const getTransactionsByDate = createAsyncThunk(
  'reports/getTransactionsByDate',
  async (date, { rejectWithValue }) => {
    try {
      const transactionsByDate = await kapustaReportsAPI
        .fetchTransactionsByDate(date)
        .then(({ data }) => data);

      return transactionsByDate;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export { getTransactionsByDate };
