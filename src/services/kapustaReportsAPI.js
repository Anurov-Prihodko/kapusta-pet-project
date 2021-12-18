import axios from 'axios';
const BASE_URL = 'https://kapusta-team-project-back-end.herokuapp.com/api';

axios.defaults.baseURL = BASE_URL;

////////////===Auth===///////////////
///================
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjVjMjZiOTZjYTk1MTUwNDhhZTZlYiIsImlhdCI6MTYzOTgxODk4MywiZXhwIjoxNjM5ODIyNTgzfQ.4-61FmwE3cut6vLl2BcqP40Vmw_AnYs7YuNRlkmt9CA';

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

///==================

async function fetchTransactionsByDate(date) {
  const { data } = await axios.get(`/transactions/${date}`);

  return data;
}

const kapustaReportsAPI = {
  fetchTransactionsByDate,
};

export default kapustaReportsAPI;
