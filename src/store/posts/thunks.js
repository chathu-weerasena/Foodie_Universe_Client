import axios from "axios";
import {
  fetchPhotos,
  fetchPosts,
  fetchRestaurants,
  fetchNews,
  deletePost,
  addNewComment,
} from "./slice";
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
      //console.log(response.data);
      dispatch(fetchPhotos(response.data.postPhotos));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchedRestaurants = () => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      const response = await axios.get(`${apiUrl}/posts/restaurants`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //console.log(response.data);
      dispatch(fetchRestaurants(response.data.postRestaurants));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchedNews = () => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      const response = await axios.get(`${apiUrl}/posts/news`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //console.log(response.data);
      dispatch(fetchNews(response.data.postNews));
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

//fetching a delete a posted news end point
export const deletedPost = (id) => {
  return async (dispatch, getState) => {
    const { token } = getState().user; //??

    try {
      const response = await axios.delete(`${apiUrl}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Deleted post", response.data);
      dispatch(deletePost(id));
      dispatch(fetchedPosts());
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addedNewComment = (content) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    const { post } = getState().post;

    try {
      const response = await axios.post(
        `${apiUrl}/posts/${post.id}/comments`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("New Story", response.data);
      dispatch(addNewComment(response.data.comment));
      dispatch(showMessageWithTimeout("Success", true, "Added New comment"));
    } catch (e) {
      console.log(e.message);
    }
  };
};
