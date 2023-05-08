import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/book/bookSlice';
import categoryReducer from '../features/category/categorySlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
