import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsByDate } from '../reports/reportsOperations';

const initialState = {
  transactionsAll: [],
  reportDate: null,
  transactionsAllLoading: false,
  transactionsAllError: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    changeReportDate: (state, { payload }) => {
      state.reportDate = payload;
    },
  },
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

export const { changeReportDate } = reportsSlice.actions;

export default reportsSlice.reducer;
