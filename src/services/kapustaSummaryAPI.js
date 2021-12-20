import axios from 'axios';
import { BASE_URL } from './kapustaAPIConstants';

axios.defaults.baseURL = BASE_URL;
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjVjMjZiOTZjYTk1MTUwNDhhZTZlYiIsImlhdCI6MTYzOTk2NDAyMCwiZXhwIjoxNjM5OTY3NjIwfQ.LGpMjNwcHWVNSg-9cfKnNX8qGjQH7TlnX6WZwWTmLvI';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

async function fetchTransactionsAnnual(year) {
  //console.log('token3=', axios.defaults.headers.common.Authorization);
  const { data } = await axios.get(`/transactions/annual/${year}`);

  return data;
}

const kapustaSummaryAPI = {
  fetchTransactionsAnnual,
};

export default kapustaSummaryAPI;
