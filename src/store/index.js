import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import photosReducer from "./photos/slice";
import restaurantsReducer from "./restaurants/slice";
import newsReducer from "./news/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    photos: photosReducer,
    restaurants: restaurantsReducer,
    news: newsReducer,
  },
});
