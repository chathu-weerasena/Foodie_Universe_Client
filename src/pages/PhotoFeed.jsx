import { Title } from "../styled";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <Title> Photo Feed!</Title>
      {!photos
        ? "Loading"
        : photos.map((photo, i) => (
            <div key={i}>
              <PhotoCard
                id={photo.id}
                imageUrl={photo.imageUrl}
                description={photo.description}
                createdAt={photo.createdAt}
                userId={photo.userId}
              />
            </div>
          ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
