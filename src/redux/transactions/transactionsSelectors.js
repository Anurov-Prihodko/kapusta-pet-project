const getTransactionsExpenseMonth = state =>
  state.transactions.transactionsExpenseMonth;

const getTransactionsIncomseMonth = state =>
  state.transactions.transactionsIncomeMonth;

const getIncome = state => state.transactions.income;

export { getTransactionsExpenseMonth, getIncome, getTransactionsIncomseMonth };
