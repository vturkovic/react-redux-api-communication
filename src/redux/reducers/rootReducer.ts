import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './postReducer';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface RootState {
  posts: Post[];
}

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;