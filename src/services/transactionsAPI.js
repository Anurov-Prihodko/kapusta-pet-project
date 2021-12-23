import axios from 'axios';
import { BASE_URL } from './kapustaAPIConstants';

axios.defaults.baseURL = BASE_URL;

async function postExpenseData(expenseData) {
  const { data } = await axios.post('/transactions/expense', expenseData);
  return data;
}

async function postIncomeData(incomeData) {
  const { data } = await axios.post('/transactions/income', incomeData);
  return data;
}

async function deleteTransactionById(transactionId) {
  const { code } = await axios.delete(`/transactions/${transactionId}`);
  return code;
}

async function fetchIncomeByDate(date) {
  const { data } = await axios.get(`/transactions/income/${date}`);
  return data;
}

async function fetchExpenseByDate(date) {
  const { data } = await axios.get(`/transactions/expense/${date}`);
  return data;
}

async function fetchAllTransactionsByMonth(month) {
  const { data } = await axios.get(`/transactions/${month}`);
  return data;
}

async function fetchAllTransactionsByYear(year) {
  const { data } = await axios.get(`/transactions/annual/${year}`);
  return data;
}

const contactsAPI = {
  postExpenseData,
  postIncomeData,
  deleteTransactionById,
  fetchIncomeByDate,
  fetchExpenseByDate,
  fetchAllTransactionsByMonth,
  fetchAllTransactionsByYear,
};

export default contactsAPI;
