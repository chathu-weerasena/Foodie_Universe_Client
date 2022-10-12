import axios from "axios";
import { fetchNews } from "./slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { apiUrl } from "../../config/constants";

export const fetchedNews = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/news`);
      const news = response.data;
      dispatch(fetchNews(news));
    } catch (e) {
      console.log(e.message);
    }
  };
};
