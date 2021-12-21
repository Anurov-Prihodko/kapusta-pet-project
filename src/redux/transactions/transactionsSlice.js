import { createSlice } from '@reduxjs/toolkit';
import {
  addExpense,
  addIncome,
  getExpenseByDate,
  removeExspenseById,
} from '../transactions/transactionsOperations';

const initialState = {
  expense: null,
  income: null,
  transactionsIncomeMonth: [],
  transactionsIncomeYear: [],
  transactionsExpenseMonth: [],
  transactionsExpenseYear: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    /* Expense */
    [addExpense.pending](state) {
      state.expense = null;
    },
    [addExpense.fulfilled](state, action) {
      state.expense = action.payload;
    },
    [addExpense.rejected](state, action) {
      state.expense = null;
    },
    /* Income */
    [addIncome.pending](state) {
      state.income = null;
    },
    [addIncome.fulfilled](state, action) {
      state.income = action.payload;
    },
    [addIncome.rejected](state, action) {
      state.income = null;
    },
    /* getExpenseByDate */
    [getExpenseByDate.pending](state) {
      state.transactionsExpenseMonth = null;
    },
    [getExpenseByDate.fulfilled](state, action) {
      state.transactionsExpenseMonth = action.payload;
    },
    /* getExpenseByDate */
    // [removeExspenseById.pending](state) {
    //   state.transactionsExpenseMonth = null;
    // },
    [removeExspenseById.fulfilled](state, action) {
      state.transactionsExpenseMonth.map(
        transaction => transaction._id !== action.payload,
      );
    },
  },
});

export default transactionsSlice.reducer;
