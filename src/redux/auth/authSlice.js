import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
    logOutUser,
    setBalance,
  getBalance
} from '../auth/authOperations';

const initialState = {
  user: {
    email: null,
    password: null,
    balance: '',
    balanceHasBeenSet: false
  },

  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
    },
    [loginUser.fulfilled](state, action) {
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.user.balance = action.payload.user.balance;
      state.user.balanceHasBeenSet = action.payload.user.balanceHasBeenSet;
    },
    [logOutUser.fulfilled](state, action) {
      state.user = {
        email: null,
        password: null,
      };
      state.token = null;
    },
    [setBalance.fulfilled](state, { payload }) {
      state.user.balance = payload.balance;
      state.user.balanceHasBeenSet = true;
    },
    [getBalance.fulfilled](state, { payload }) {
      state.balance = payload.balance;
    },
  },
});

export default authSlice.reducer;
