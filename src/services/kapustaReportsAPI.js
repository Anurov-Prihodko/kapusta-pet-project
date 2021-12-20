import axios from 'axios';
import { BASE_URL } from './kapustaAPIConstants';

axios.defaults.baseURL = BASE_URL;

async function fetchTransactionsByDate(date) {
  const { data } = await axios.get(`/transactions/${date}`);

  return data;
}

const kapustaReportsAPI = {
  fetchTransactionsByDate,
};

export default kapustaReportsAPI;
