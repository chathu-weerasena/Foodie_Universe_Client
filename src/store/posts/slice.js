import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  post: null,
  photos: null,
  restaurants: null,
  news: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPhotos: (state, action) => {
      state.photos = action.payload;
    },
    fetchRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    fetchNews: (state, action) => {
      state.news = action.payload;
    },
    fetchPosts: (state, action) => {
      state.posts = action.payload;
    },
    addNewPhoto: (state, action) => {
      state.photos.push(action.payload);
    },
  },
});

export const { fetchPhotos, fetchRestaurants, fetchNews, fetchPosts } =
  postsSlice.actions;

export default postsSlice.reducer;
