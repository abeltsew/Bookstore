import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        item_id: action.item_id,
        title: action.title,
        author: action.author,
        category: action.category,
      });
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload
      );
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
