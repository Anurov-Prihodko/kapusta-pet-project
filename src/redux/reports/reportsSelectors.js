const getCategoryDataExpense = state => state.reports.transactionsAll.expenses;
const getCategoryDataIncome = state => state.reports.transactionsAll.incomes;
const getExpensesTotalSum = state => state.reports.transactionsAll.allExpenses;
const getIncomesTotalSum = state => state.reports.transactionsAll.allIncomes;
const getReportMonth = state => state.reports.reportMonth;
const getReportYear = state => state.reports.reportYear;

export {
  getCategoryDataExpense,
  getCategoryDataIncome,
  getIncomesTotalSum,
  getExpensesTotalSum,
  getReportMonth,
  getReportYear,
};
