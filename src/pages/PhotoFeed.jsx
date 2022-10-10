import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

import { Title } from "../styled";
import { fetchedPhotos } from "../store/photos/thunks";
import { selectPhotos } from "../store/photos/selectors";
import { PhotoCard } from "../components";

export const PhotoFeed = () => {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  //console.log("Photos", photos);

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
              <PhotoCard
                key={i}
                id={photo.id}
                imageUrl={photo.imageUrl}
                description={photo.description}
                createdAt={photo.createdAt}
                userId={photo.userId}
              />
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
