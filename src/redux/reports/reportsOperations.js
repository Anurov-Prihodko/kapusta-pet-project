import { createAsyncThunk } from '@reduxjs/toolkit';

import kapustaReportsAPI from '../../services/kapustaReportsAPI';

const getTransactionsByDate = createAsyncThunk(
  'reports/getTransactionsByDate',
  async (date, { rejectWithValue }) => {
    try {
      const transactionsByDate = await kapustaReportsAPI
        .fetchTransactionsByDate(date)
        .then(({ data }) => data);

      const sortedExpenses = transactionsByDate.expenses.map(expensesItem => {
        const sortedTransactions = expensesItem.transactions.sort(
          (a, b) => b.transactionTotalSum - a.transactionTotalSum,
        );
        return { ...expensesItem, sortedTransactions };
      });

      const sortedIncomes = transactionsByDate.incomes.map(expensesItem => {
        const sortedTransactions = expensesItem.transactions.sort(
          (a, b) => b.transactionTotalSum - a.transactionTotalSum,
        );
        return { ...expensesItem, sortedTransactions };
      });

      transactionsByDate.expenses = sortedExpenses;
      transactionsByDate.incomes = sortedIncomes;

      return transactionsByDate;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export { getTransactionsByDate };
