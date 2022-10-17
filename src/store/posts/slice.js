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
    deletePost: (state, action) => {
      const id = action.payload;
      const newPosts = state.posts.filter((post) => {
        return post.id !== id;
      });
      state.posts = newPosts;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    addNewComment: (state, action) => {
      state.post.comments.push(action.payload);
    },
  },
});

export const {
  fetchPhotos,
  fetchRestaurants,
  fetchNews,
  fetchPosts,
  deletePost,
  addPost,
  addNewComment,
} = postsSlice.actions;

export default postsSlice.reducer;
