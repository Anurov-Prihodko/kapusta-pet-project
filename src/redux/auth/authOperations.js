import kapustaAuthAPI from '../../services/kapustaAuthAPI';

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
      authToken.set(token);
      return { user: { email }, token };
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

export { registerUser, loginUser, logOutUser, loginUserViaGoogle };
