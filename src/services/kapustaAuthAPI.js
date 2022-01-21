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

async function setBalance(newBalance) {
  const { data } = await axios.post('/users/setBalance', newBalance);

  return data.balance;
}

async function getLoginViaGoogle(email) {
  const { user } = await axios.get('/users/login-via-google', email)
  return user
}

const kapustaAuthAPI = {
  postUserRegisterData,
  postUserLoginData,
  deleteUserLoginData,
  setBalance,
  getLoginViaGoogle
};

export default kapustaAuthAPI;
