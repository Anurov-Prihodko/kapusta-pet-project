import axios from 'axios';
import { BASE_URL } from './kapustaAPIConstants';

axios.defaults.baseURL = BASE_URL;

async function getAllExpenseCategories() {
  const { data } = await axios.get('categories/getAll');
  return data;
}

async function addCategories(category) {
  const { data } = await axios.post('/categories/', category);
  return data;
}

async function deleteCategoryById(categoryId) {
  const { code } = await axios.delete(`/categories/${categoryId}`);
  return code;
}

const categoriesAPI = {
  addCategories,
  getAllExpenseCategories,
  deleteCategoryById,
};

export default categoriesAPI;
