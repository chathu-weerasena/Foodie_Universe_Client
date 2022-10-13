import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Title } from "../styled";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { PhotoFeed, RestaurantPage } from "../pages";
import { fetchedPosts } from "../store/posts/thunks";
import { AddPhotoForm, MyPostCard } from "../components";
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
      <Grid>
        {/* <Grid item xs={12}>
          <Title> My Profile</Title>
        </Grid>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <Item></Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid> */}
      </Grid>

      <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
        <Button
          size="large"
          variant="outlined"
          onClick={() => setAddNew(!addNew)}
        >
          Add New FoodPrint
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
        {addNew && <AddPhotoForm />}
      </Stack>
      <Grid>
        {!posts
          ? "Loading"
          : posts.map((post, i) => (
              <MyPostCard key={i} id={post.id} content={post.content} />
            ))}
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
