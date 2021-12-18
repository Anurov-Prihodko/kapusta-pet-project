import axios from 'axios';
const BASE_URL = 'https://kapusta-team-project-back-end.herokuapp.com/api';

axios.defaults.baseURL = BASE_URL;

////////////===Auth===///////////////
///======= for test =========
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjVjMjZiOTZjYTk1MTUwNDhhZTZlYiIsImlhdCI6MTYzOTgyNTM5MSwiZXhwIjoxNjM5ODI4OTkxfQ.PpOzNJ3ZTJFXyYrRxAD3Ik4xA6-Pm3uhcAPh1mh-CZg';

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

///==================

async function fetchTransactionsByDate(date) {
  const { data } = await axios.get(`/transactions/${date}`);
  // console.log('data', data);
  return data;
}

const kapustaReportsAPI = {
  fetchTransactionsByDate,
};

export default kapustaReportsAPI;
