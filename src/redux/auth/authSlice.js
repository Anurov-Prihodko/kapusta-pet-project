import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser, setBalance } from '../auth/authOperations';

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
      state.user.balance = action.payload
      state.user.balanceHasBeenSet = true
    }
  },
});

export default authSlice.reducer;
