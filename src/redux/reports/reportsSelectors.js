const getCategoryDataExpense = state => state.reports.transactionsAll.expenses;
const getCategoryDataIncome = state => state.reports.transactionsAll.incomes;
const getExpensesTotalSum = state => state.reports.transactionsAll.allExpenses;
const getIncomesTotalSum = state => state.reports.transactionsAll.allIncomes;
const getReportDate = state => state.reports.reportDate;
const getTransactionsAllLoading = state => state.reports.transactionsAllLoading;
const getTransactionsAllError = state => state.reports.transactionsAllError;

export {
  getCategoryDataExpense,
  getCategoryDataIncome,
  getIncomesTotalSum,
  getExpensesTotalSum,
  getReportDate,
  getTransactionsAllLoading,
  getTransactionsAllError,
};
