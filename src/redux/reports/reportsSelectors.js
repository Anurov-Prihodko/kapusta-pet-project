import { createSelector } from 'reselect';

const getCategoryDataExpense = state => state.reports.transactionsAll.expenses;
const getCategoryDataIncome = state => state.reports.transactionsAll.incomes;

export { getCategoryDataExpense, getCategoryDataIncome };
