import axios from "axios";
import { fetchPhotos, fetchPosts } from "./slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { apiUrl } from "../../config/constants";

export const fetchedPhotos = () => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      const response = await axios.get(`${apiUrl}/posts/photos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //const photos = response.data;
      console.log(response.data);
      dispatch(fetchPhotos(response.data.postPhotos));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchedPosts = () => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      const response = await axios.get(`${apiUrl}/posts/profile/feed`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);

      dispatch(fetchPosts(response.data.posts));
    } catch (e) {
      console.log(e.message);
    }
  };
};