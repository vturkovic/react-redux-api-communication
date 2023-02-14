import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <token>',
      },
      credentials: 'include',
    });
    
    const data = await response.json();
    return data;

  } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch data');
  }
});