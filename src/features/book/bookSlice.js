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
  return { book: payload, post: post.data };
});

export const deleteBook = createAsyncThunk('books/delete', async (payload) => {
  const deletePost = await axios.delete(`${URL}/${payload}`);
  return { bookId: payload, deletedPost: deletePost.data };
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
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

    builder.addCase(postBook.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.post === 'Created') {
        state.books.push(payload.book);
      }
    });
    builder.addCase(postBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Delete

    builder.addCase(deleteBook.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = state.books.filter(
        (book) => book.item_id !== payload.bookId,
      );
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;
