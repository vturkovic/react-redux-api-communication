import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../actions/postActions';

const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default postSlice.reducer;