import { createSlice } from '@reduxjs/toolkit';

import {
  registerUser,
  loginUser,
  logOutUser,
  loginUserViaGoogle,
  setBalance,
} from '../auth/authOperations';
import { newExpenseData, newIncomeData } from '../auth/authOperations';
import {
  removeExspenseById,
  removeIncomseById,
} from '../transactions/transactionsOperations';

const initialState = {
  user: {
    email: null,
    balance: null,
    balanceHasBeenSet: false,
  },

  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [newExpenseData.fulfilled](state, action) {
      state.user.balance = action.payload.balance;
    },
    [newIncomeData.fulfilled](state, action) {
      state.user.balance = action.payload.balance;
    },
    [registerUser.fulfilled](state, action) {
      state.user.email = action.payload.email;
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
      };
      state.token = null;
    },

    [setBalance.fulfilled](state, action) {
      state.user.balance = action.payload;
      state.user.balanceHasBeenSet = true;
    },
    [loginUserViaGoogle.fulfilled](state, action) {
      state.user.email = action.payload.user.email;
      state.user.balance = action.payload.user.balance;
      state.user.balanceHasBeenSet = action.payload.user.balanceHasBeenSet;
      state.token = action.payload.token;
    },

    [removeExspenseById.fulfilled](state, action) {
      state.user.balance = action.payload.balance;
    },
    [removeIncomseById.fulfilled](state, action) {
      state.user.balance = action.payload.balance;
    },
  },
});

export default authSlice.reducer;
