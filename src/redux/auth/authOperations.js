import kapustaAuthAPI from '../../services/kapustaAuthAPI';

// import axios from 'axios';
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

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    authToken.set(persistedToken);
    // try {
    //   const currentUser = await kapustaAuthAPI.fetchCurrentUser();
    //   return currentUser;
    // } catch (err) {
    //   return rejectWithValue(err.message);
    // }
  },
);

export { registerUser, loginUser, logOutUser, getCurrentUser };
