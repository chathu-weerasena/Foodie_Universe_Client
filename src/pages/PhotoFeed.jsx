import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Title } from "../styled";

import { fetchedPhotos } from "../store/posts/thunks";
import { selectPhotos } from "../store/posts/selectors";
import { PhotoCard } from "../components";
import { NewsFeed } from "./index";

export const PhotoFeed = () => {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  //console.log(photos);

  useEffect(() => {
    dispatch(fetchedPhotos());
  }, [dispatch]);
  return (
    <Container>
      <Grid>
        <Grid item xs={12}>
          <Title> Food Prints!</Title>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container sx={{ maxWidth: "850px" }}>
            {!photos
              ? "Loading"
              : photos.map((photo, i) => (
                  <PhotoCard key={i} photo={photo.photo} user={photo.user} />
                ))}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <NewsFeed />
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
