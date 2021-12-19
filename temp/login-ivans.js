//import axios from 'axios';
const axios = require('axios');

const postToAdd = {
  email: 'ivans@inbox.com',
  password: '123456',
};

/*
fetch('https://kapusta-team-project-back-end.herokuapp.com/api/users/signin', {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));
*/

const BASE_URL = 'https://kapusta-team-project-back-end.herokuapp.com';

axios.defaults.baseURL = BASE_URL;
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjVjMjZiOTZjYTk1MTUwNDhhZTZlYiIsImlhdCI6MTYzOTg1NDg3NCwiZXhwIjoxNjM5ODU4NDc0fQ.yklqDDTxRQBwhhCXQzJkxbp7zYOCv48TePXVraKFmHo';

//axios.defaults.headers.common.Authorization = `Bearer ${token}`;

async function log() {
  const { data: login } = await axios.post(`/api/users/signin`, postToAdd);
  console.log(login);
  if (login.code === 200) {
    axios.defaults.headers.common.Authorization = `Bearer ${login.data.token}`;
    const { data: trans } = await axios.get(`/api/transactions/12-2021`);
    console.log(trans);
  }
}
log();
