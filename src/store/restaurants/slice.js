import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: null,
  restaurant: null,
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    fetchRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const { fetchRestaurants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
