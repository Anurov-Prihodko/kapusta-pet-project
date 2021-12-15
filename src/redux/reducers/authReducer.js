import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;
