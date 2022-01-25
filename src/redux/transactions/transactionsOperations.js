import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import transactionsAPI from '../../services/transactionsAPI';

const changeIncome = createAction('transactions/addIncome');

const getExpenseByDate = createAsyncThunk(
  'transactions/getExpenseByDate',
  async (date, { rejectWithValue }) => {
    try {
      const expense = await transactionsAPI
        .fetchExpenseByDate(date)
        .then(({ data }) => data);

      return expense;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const getIncomseByDate = createAsyncThunk(
  'transactions/getIncomseByDate',
  async (date, { rejectWithValue }) => {
    try {
      const expense = await transactionsAPI
        .fetchIncomeByDate(date)
        .then(({ data }) => data);

      return expense;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const removeExspenseById = createAsyncThunk(
  'transactions/removeExspenseById',
  async (transactionId, { rejectWithValue }) => {
    try {
      const transaction = await transactionsAPI.deleteTransactionById(
        transactionId,
      );

      return transaction;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const removeIncomseById = createAsyncThunk(
  'transactions/removeIncomseById',
  async (transactionId, { rejectWithValue }) => {
    try {
      const transaction = await transactionsAPI.deleteTransactionById(
        transactionId,
      );

      return transaction;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export {
  changeIncome,
  getExpenseByDate,
  getIncomseByDate,
  removeExspenseById,
  removeIncomseById,
};
