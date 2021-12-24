import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsAnnual } from '../summary/summaryOperations';

const initialState = {
  transactionsAnnual: null,
  summaryYear: new Date().getFullYear(),
  category: 'expenses' /*"expenses" or "incomes"*/,
  refresh: 1 /*incremented*/,
  loading: false,
  error: null,
};

const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    changeSummaryYear: (state, { payload }) => {
      state.summaryYear = payload;
    },
    changeCategory: (state, { payload }) => {
      state.category = payload;
    },
    newRefresh: (state, { payload }) => {
      state.refresh = state.refresh + 1;
    },
  },
  extraReducers: {
    [getTransactionsAnnual.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [getTransactionsAnnual.fulfilled](state, action) {
      state.transactionsAnnual = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getTransactionsAnnual.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { changeSummaryYear, changeCategory, newRefresh } =
  summarySlice.actions;

export default summarySlice.reducer;
