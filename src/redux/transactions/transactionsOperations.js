import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import transactionsAPI from '../../services/transactionsAPI';

const addExpense = createAsyncThunk(
  'transactions/addExpense',
  async (expenseData, { rejectWithValue }) => {
    try {
      const expense = await transactionsAPI
        .postExpenseData(expenseData)
        .then(({ data }) => data);

      return expense;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const addIncome = createAsyncThunk(
  'transactions/addIncome',
  async (incomeData, { rejectWithValue }) => {
    try {
      const income = await transactionsAPI
        .postIncomeData(incomeData)
        .then(({ data }) => data);

      return income;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

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

const removeExspenseById = createAsyncThunk(
  'transactions/removeExspenseById',
  async (transactionId, { rejectWithValue }) => {
    try {
      const transaction = await transactionsAPI
        .deleteTransactionById(transactionId)
        .then(({ data }) => data);

      return transaction;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export { addExpense, addIncome, getExpenseByDate, removeExspenseById };
