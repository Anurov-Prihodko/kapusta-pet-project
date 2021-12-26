import { createSlice } from '@reduxjs/toolkit';

import {
  getAllExpenseCategories,
  addCategory,
  removeCategoryById,
} from '../categories/categoriesOperations';

const initialState = {
  categoriesExpense: [],
  categoriesIncomse: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [getAllExpenseCategories.fulfilled](state, action) {
      state.categoriesExpense = action.payload;
    },
    [removeCategoryById.fulfilled](state, action) {
      state.categoriesExpense = state.categoriesExpense.filter(
        item => item._id !== action.meta.arg,
      );
    },
    [addCategory.fulfilled](state, action) {
      state.categoriesExpense = [...state.categoriesExpense, action.payload];
    },
  },
});

export default categoriesSlice.reducer;
