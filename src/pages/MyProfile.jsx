import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { Title } from "../styled";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { PhotoFeed, RestaurantPage } from "./index";
import { AddPhotoForm } from "../components";
import { selectUser, selectToken } from "../store/user/selectors";

export const MyProfile = () => {
  const [addNew, setAddNew] = useState(false);

  return (
    <Container>
      <Grid item xs={12}>
        <Title> My Profile</Title>
      </Grid>
      <Grid>
        <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
          <Button
            size="large"
            variant="outlined"
            onClick={() => setAddNew(!addNew)}
          >
            Add New Post
          </Button>
          {addNew && <AddPhotoForm />}
        </Stack>
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
