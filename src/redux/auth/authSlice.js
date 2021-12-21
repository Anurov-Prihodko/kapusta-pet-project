import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser } from '../auth/authOperations';

const initialState = {
  user: {
    email: null,
    password: null,
    balanse: null,
    balanceHasBeenSet: false,
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
      state.user.balanse = action.payload.user.balance;
      state.user.balanceHasBeenSet = action.payload.user.balanceHasBeenSet;
    },
    [logOutUser.fulfilled](state, action) {
      state.user = {
        email: null,
        password: null,
      };
      state.token = null;
    },
  },
});

export default authSlice.reducer;
