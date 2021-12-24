const getSummaryYear = state => state.summary.summaryYear;
const getSummaryCategory = state => state.summary.category;
const getSummaryExpenses = state =>
  state.summary.transactionsAnnual
    ? state.summary.transactionsAnnual.expensesForYear
    : null;
const getSummaryIncomes = state =>
  state.summary.transactionsAnnual
    ? state.summary.transactionsAnnual.incomesForYear
    : null;

export {
  getSummaryYear,
  getSummaryCategory,
  getSummaryExpenses,
  getSummaryIncomes,
};
