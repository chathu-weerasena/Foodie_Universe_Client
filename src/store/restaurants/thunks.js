import axios from "axios";
import { fetchRestaurants } from "./slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { apiUrl } from "../../config/constants";

export const fetchedRestaurants = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/restaurants`);
      const restaurants = response.data;
      console.log(response.data);
      dispatch(fetchRestaurants(restaurants));
    } catch (e) {
      console.log(e.message);
    }
  };
};
