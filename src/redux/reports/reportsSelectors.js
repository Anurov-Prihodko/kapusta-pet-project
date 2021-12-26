const getCategoryDataExpense = state => state.reports.transactionsAll.expenses;
const getCategoryDataIncome = state => state.reports.transactionsAll.incomes;
const getExpensesTotalSum = state => state.reports.transactionsAll.allExpenses;
const getIncomesTotalSum = state => state.reports.transactionsAll.allIncomes;
const getReportDate = state => state.reports.reportDate;

export {
  getCategoryDataExpense,
  getCategoryDataIncome,
  getIncomesTotalSum,
  getExpensesTotalSum,
  getReportDate,
};
