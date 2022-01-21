import kapustaAuthAPI from '../../services/kapustaAuthAPI';
import contactsAPI from '../../services/transactionsAPI';
import { authToken } from '../../services/authToken';
const { createAsyncThunk } = require('@reduxjs/toolkit');

const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const user = await kapustaAuthAPI.postUserRegisterData(userCredentials);

      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const resData = await kapustaAuthAPI.postUserLoginData(userCredentials);

      authToken.set(resData.token);

      return resData;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const loginUserViaGoogle = createAsyncThunk(
  'auth/loginUserViaGoogle',
  async ({ email, token }, { rejectWithValue }) => {
    try {
      const { user } = kapustaAuthAPI.getLoginViaGoogle({ email });

      authToken.set(token);

      return { user, token };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      const user = await kapustaAuthAPI.deleteUserLoginData();

      authToken.unset();

      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const setBalance = createAsyncThunk(
  'auth/setBalance',
  async (newBalance, { rejectWithValue }) => {
    try {
      const balance = kapustaAuthAPI.setBalance(newBalance);

      return balance;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const newExpenseData = createAsyncThunk(
  'auth/newExpenseData',
  async (transactionData, { rejectWithValue }) => {
    try {
      const balance = contactsAPI.postExpenseData(transactionData);
      return balance;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const newIncomeData = createAsyncThunk(
  'auth/newIncomeData',
  async (transactionData, { rejectWithValue }) => {
    try {
      const balance = contactsAPI.postIncomeData(transactionData);
      return balance;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export {
  registerUser,
  loginUser,
  logOutUser,
  loginUserViaGoogle,
  setBalance,
  newExpenseData,
  newIncomeData,
};
