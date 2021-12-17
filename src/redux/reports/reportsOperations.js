import { createAsyncThunk } from '@reduxjs/toolkit';

// import kapustaAPI from '../services/kapustaAPI';

////////////===kapustaAPI===///////////////
import axios from 'axios';
const BASE_URL = 'https://kapusta-team-project-back-end.herokuapp.com/api';

axios.defaults.baseURL = BASE_URL;
///================
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjVjMjZiOTZjYTk1MTUwNDhhZTZlYiIsImlhdCI6MTYzOTc0OTAwMSwiZXhwIjoxNjM5NzUyNjAxfQ.HpCH0JO8WFZmNCvTg4vHzRdCRvyKue6PYhBCTvPR0IQ';

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

///==================

async function fetchTransactionsByDate(date) {
  const { data } = await axios.get(`/transactions/${date}`);

  return data;
}

const kapustaAPI = {
  fetchTransactionsByDate,
};

export default kapustaAPI;

//////////////////////////

const getTransactionsByDate = createAsyncThunk(
  'reports/getTransactionsByDate',
  async (date, { rejectWithValue }) => {
    try {
      const transactionsByDate = await kapustaAPI
        .fetchTransactionsByDate(date)
        .then(({ data }) => data);

      return transactionsByDate;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export { getTransactionsByDate };
