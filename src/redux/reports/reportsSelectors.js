import { createSelector } from 'reselect';

const getCategoryDataExpense = state => state.reports.transactionsAll.expenses;
const getCategoryDataIncome = state => state.reports.transactionsAll.incomes;
const getReportMonth = state => state.reports.reportMonth;
const getReportYear = state => state.reports.reportYear;

export {
  getCategoryDataExpense,
  getCategoryDataIncome,
  getReportMonth,
  getReportYear,
};
