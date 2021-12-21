import axios from 'axios';
import { BASE_URL } from './kapustaAPIConstants';

axios.defaults.baseURL = BASE_URL;

async function postUserRegisterData(userData) {
  const { data } = await axios.post('/users/signup', userData);

  return data.user;
}

async function postUserLoginData(userData) {
  const { data } = await axios.post('/users/signin', userData);

  return data.data;
}

async function deleteUserLoginData() {
  const { data } = await axios.post('/users/logout');
  return data;
}

async function fetchCurrentUser() {
  const { data } = await axios.get('/users/current');

  return data;
} //?
async function setBalance(balance)  {
  const response = await axios.post('/users/balance', balance);
  return response;
};

async function getBalance () {
  const response = await axios.get('/users/balance');
  return response;
};
const kapustaAuthAPI = {
  postUserRegisterData,
  postUserLoginData,
  deleteUserLoginData,
  fetchCurrentUser,
  setBalance,
  getBalance
};

export default kapustaAuthAPI;
