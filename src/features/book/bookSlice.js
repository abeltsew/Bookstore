import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pf7LGlVtc9WA0twltqG4/books';
const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const getBooks = createAsyncThunk('books/get', async () => {
  const books = await axios.get(URL);
  return books.data;
});

export const postBook = createAsyncThunk('books/add', async (payload) => {
  const post = await axios.post(URL, payload);
  return post.data;
});

export const deleteBook = createAsyncThunk('books/delete', async (payload) => {
  const deletePost = await axios.delete(`${URL}/${payload}`);
  return deletePost.data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        item_id: payload.item_id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const books = Object.entries(payload).flatMap(([key, value]) => value.map((book) => (
        { ...book, item_id: key })));
      state.books = books;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // post

    builder.addCase(postBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(postBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Delete

    builder.addCase(deleteBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
