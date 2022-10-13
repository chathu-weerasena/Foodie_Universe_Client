import axios from "axios";
import { fetchPhotos, addNewPhoto } from "./slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { apiUrl } from "../../config/constants";

export const fetchedPhotos = () => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      const response = await axios.get(`${apiUrl}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const photos = response.data;
      dispatch(fetchPhotos(photos));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addedNewPhoto = (image, content, type, title) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      const response = await axios.post(
        `${apiUrl}/photos`,
        { image, content, type, title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //console.log("New Photo", response.data);
      dispatch(addNewPhoto(response.data));
      dispatch(showMessageWithTimeout("Sucess", true, "Upload suceessful"));
    } catch (e) {
      console.log(e.message);
    }
  };
};
