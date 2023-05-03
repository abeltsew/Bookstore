import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    CheckStatus: (state) => {
      state.status = 'Under Construction';
    },
  },
});

export const { CheckStatus } = categorySlice.actions;

export default categorySlice.reducer;
