import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsByDate } from '../reports/reportsOperations';

const initialState = {
  transactionsAll: [],
  reportMonth: null,
  reportYear: null,
  transactionsAllLoading: false,
  transactionsAllError: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    changeReportMonth: (state, { payload }) => {
      state.reportMonth = payload;
    },
    changeReportYear: (state, { payload }) => {
      state.reportYear = payload;
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

export const { changeReportMonth, changeReportYear } = reportsSlice.actions;

export default reportsSlice.reducer;
