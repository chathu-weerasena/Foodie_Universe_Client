import axios from "axios";
import { fetchPhotos } from "./slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { apiUrl } from "../../config/constants";

export const fetchedPhotos = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/photos`);
      const photos = response.data;
      dispatch(fetchPhotos(photos));
    } catch (e) {
      console.log(e.message);
    }
  };
};
