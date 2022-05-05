import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from 'types/';
import { FullSliceType } from 'types/FullSliceType';

import type { RootState } from '../store';

// Define a type for the slice state
interface PostsState {
  posts: PostType[],
  currentPage: number,
  currentSearch: string,
  currentAsc: string,
  isLoading: boolean,
}

// Define the initial state using that type
const initialState: PostsState = {
  posts: [],
  currentPage: 1,
  currentSearch: 'id',
  currentAsc: 'true',
  isLoading: true,
};

export const postsSlice = createSlice({
  name: 'posts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      return state;
    },
    loadPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
      state.isLoading = false;
      return state;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      return state;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.currentSearch = action.payload;
      return state;
    },
    setAsc: (state, action: PayloadAction<string>) => {
      state.currentAsc = action.payload;
      return state;
    },
    setAll: (state, action: PayloadAction<FullSliceType>) => {
      state.currentAsc = action.payload.asc;
      state.currentSearch = action.payload.search;
      state.currentPage = action.payload.page;
      return state;
    },
  },
});

export const {
  setLoading,
  loadPosts,
  setPage,
  setSearch,
  setAsc,
  setAll,
} = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
