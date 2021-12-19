import axios from 'axios';
import { BASE_URL } from './kapustaAPIConstants';
// import { authToken } from '../services/authToken';

axios.defaults.baseURL = BASE_URL;

////////////===Auth===///////////////
///======= for test =========
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjVjMjZiOTZjYTk1MTUwNDhhZTZlYiIsImlhdCI6MTYzOTkyMDMyNCwiZXhwIjoxNjM5OTIzOTI0fQ.zv6CHBg7qLoyD4bvWbrF1smFV1_d73IIYbKPGueJRNc';

// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

///==================

async function fetchTransactionsByDate(date) {
  const { data } = await axios.get(`/transactions/${date}`);

  return data;
}

const kapustaReportsAPI = {
  fetchTransactionsByDate,
};

export default kapustaReportsAPI;
