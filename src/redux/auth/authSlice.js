import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOutUser,
  getCurrentUser,
} from '../auth/authOperations';

const initialState = {
  user: {
    email: null,
    password: null,
    balanse: null,
    balanceHasBeenSet: false
  },

  token: null,
  isLoggedIn: false,
  isChecksCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.user.balanse = action.payload.user.balance;
      state.user.balanceHasBeenSet = action.payload.user.balanceHasBeenSet;
    },
    [logOutUser.fulfilled](state, action) {
      state.user = {
        name: null,
        email: null,
        password: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state) {
      state.isChecksCurrentUser = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      // state.user = action.payload;
      state.isLoggedIn = true;
      state.isChecksCurrentUser = false;
    },
    [getCurrentUser.rejected](state) {
      state.isChecksCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
