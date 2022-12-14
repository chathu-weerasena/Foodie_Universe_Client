import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Title } from "../styled";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { PhotoFeed, RestaurantPage } from "../pages";
import { fetchedPosts } from "../store/posts/thunks";
import {
  AddPostForm,
  MyPhotoCard,
  MyNewsCard,
  MyRestaurantCard,
} from "../components";
import { selectPosts } from "../store/posts/selectors";

export const MyProfile = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log("Posts", posts);

  const [addNew, setAddNew] = useState(false);

  useEffect(() => {
    dispatch(fetchedPosts());
  }, [dispatch]);

  return (
    <Container>
      <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
        <Button
          size="large"
          variant="outlined"
          onClick={() => setAddNew(!addNew)}
        >
          Add New Post
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
        {addNew && <AddPostForm />}
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          {!posts
            ? "Loading"
            : posts
                .filter(
                  (post) => post.news === null && post.restaurant === null
                )
                .map((post, i) => (
                  <MyPhotoCard key={i} photo={post.photo} user={post.user} />
                ))}

          {!posts
            ? "Loading"
            : posts
                .filter((post) => post.photo === null && post.news === null)
                .map((post, i) => (
                  <MyRestaurantCard
                    key={i}
                    restaurant={post.restaurant}
                    user={post.user}
                  />
                ))}
        </Grid>
        <Grid item xs={4}>
          {!posts
            ? "Loading"
            : posts
                .filter(
                  (post) => post.restaurant === null && post.photo === null
                )
                .map((post, i) => (
                  <MyNewsCard key={i} news={post.news} user={post.user} />
                ))}
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  background: #f5e6d3;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
