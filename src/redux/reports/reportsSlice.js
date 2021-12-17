import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsByDate } from '../reports/reportsOperations';

const initialState = {
  transactionsAll: [],
  transactionsAllLoading: false,
  transactionsAllError: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: {
    [getTransactionsByDate.pending](state) {
      state.transactionsAllLoading = true;
      state.transactionsAllError = null;
    },
    [getTransactionsByDate.fulfilled](state, action) {
      state.transactionsAll = action.payload;
      state.transactionsAllLoading = false;
      state.transactionsAllError = null;
    },
    [getTransactionsByDate.rejected](state, action) {
      state.transactionsAllLoading = false;
      state.transactionsAllError = action.payload;
    },
  },
});

export default reportsSlice.reducer;
