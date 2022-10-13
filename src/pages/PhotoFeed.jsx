import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Title } from "../styled";

import { fetchedPhotos } from "../store/posts/thunks";
import { selectPhotos } from "../store/posts/selectors";
import { PhotoCard } from "../components";
//import { NewsFeed } from "./index";

export const PhotoFeed = () => {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  console.log(photos);

  useEffect(() => {
    dispatch(fetchedPhotos());
  }, [dispatch]);
  return (
    <Container>
      <Grid>
        <Grid item xs={12}>
          <Title> Photo Feed!</Title>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "980px" }}>
        {!photos
          ? "Loading"
          : photos.map((photo, i) => (
              <PhotoCard key={i} createdAt={photo.createdAt} photo={photo} />
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
