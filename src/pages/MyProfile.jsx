import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Title } from "../styled";
import Grid from "@mui/material/Grid";

import { PhotoFeed, RestaurantPage } from "./index";
import { AddPhotoForm } from "../components";
import { selectUser, selectToken } from "../store/user/selectors";

export const MyProfile = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <Title> My Profile</Title>
      </Grid>
      <Grid>
        <Grid>
          <AddPhotoForm />
        </Grid>
        <Grid>
          <RestaurantPage />
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
