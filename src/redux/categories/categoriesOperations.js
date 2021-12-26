import { createAsyncThunk } from '@reduxjs/toolkit';

import categoriesAPI from '../../services/categoriesAPI';

const getAllExpenseCategories = createAsyncThunk(
  'categories/getAllExpenseCategories',
  async (date, { rejectWithValue }) => {
    try {
      const categories = await categoriesAPI.getAllExpenseCategories();

      return categories.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (categoryData, { rejectWithValue }) => {
    try {
      const category = await categoriesAPI
        .addCategories(categoryData)
        .then(({ data }) => data);

      return category;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const removeCategoryById = createAsyncThunk(
  'categories/removeCategoryById',
  async (categoryId, { rejectWithValue }) => {
    try {
      const transaction = await categoriesAPI.deleteCategoryById(categoryId);
      return transaction;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export { addCategory, getAllExpenseCategories, removeCategoryById };
