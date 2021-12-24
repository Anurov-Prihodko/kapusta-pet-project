import axios from 'axios';
import { BASE_URL } from './kapustaAPIConstants';

axios.defaults.baseURL = BASE_URL;

async function fetchTransactionsAnnual(year) {
  // console.log(new Error().stack);
  const { data } = await axios.get(`/transactions/annual/${year}`);

  return data;
}

const kapustaSummaryAPI = {
  fetchTransactionsAnnual,
};

export default kapustaSummaryAPI;
