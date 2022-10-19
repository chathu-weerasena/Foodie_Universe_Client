import axios from "axios";
import {
  fetchPhotos,
  fetchPosts,
  fetchRestaurants,
  fetchNews,
  deletePost,
  addPost,
  addNewComment,
} from "./slice";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { apiUrl } from "../../config/constants";

// export const fetchPosts = () => {
//   return async (dispatch, getState) => {
//     const { token } = getState().user;
//     try {
//       const response = await axios.get(`${apiUrl}/posts`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       dispatch(fetchedPosts(response.data.Posts));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// };

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

      dispatch(fetchRestaurants(response.data.postRestaurants));
      console.log(response.data.postRestaurants);
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
    dispatch(appLoading());

    try {
      const response = await axios.delete(`${apiUrl}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Deleted post", response.data);
      dispatch(deletePost(id));
      dispatch(appDoneLoading());
      //dispatch(fetchedPosts());
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addNewPost = (
  postType,
  image,
  content,
  name,
  title,
  address,
  endDate
) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    try {
      const response = await axios.post(
        `${apiUrl}/posts`,
        { postType, image, content, name, title, address, endDate },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(addPost(response.data));
      dispatch(showMessageWithTimeout("Sucess", true, "Upload suceessful"));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addedNewComment = (content, postId) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    // const { post } = getState().post;

    try {
      const response = await axios.post(
        `${apiUrl}/posts/${postId}/comments`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("New Comment", response.data);
      dispatch(addNewComment(response.data.comment));
      dispatch(showMessageWithTimeout("Success", true, "Added New comment"));
    } catch (e) {
      console.log(e.message);
    }
  };
};
