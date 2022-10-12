import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    fetchNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const { fetchNews } = newsSlice.actions;

export default newsSlice.reducer;
