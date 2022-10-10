import axios from "axios";
import { fetchPhotos, addNewPhoto } from "./slice";
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

export const addedNewPhoto = (imageUrl, description) => {
  return async (dispatch, getState) => {
    const { token, profile } = getState().user;
    try {
      const response = await axios.post(
        `${apiUrl}/photos/${profile.id}`,
        { imageUrl, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("New Photo", response.data);
      dispatch(addNewPhoto(response.data));
      dispatch(showMessageWithTimeout("Sucess", true, "Upload suceessful"));
    } catch (e) {
      console.log(e.message);
    }
  };
};
