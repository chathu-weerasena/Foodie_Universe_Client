import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: null,
  photo: null,
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    fetchPhotos: (state, action) => {
      state.photos = action.payload;
    },
  },
});

export const { fetchPhotos } = photosSlice.actions;

export default photosSlice.reducer;
