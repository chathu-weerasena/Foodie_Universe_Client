import * as React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import styled from "styled-components";

import { CategoryCard } from "../components";
import { Login } from "./index";

export const Homepage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CategoryCard
            image="https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg"
            title="Food Prints"
            content="Welcome to the tasty captures of your favorite dishes!"
          />

          <CategoryCard
            image="https://cdn.vox-cdn.com/thumbor/7HRjMUBf0ObMoA33zNPSYJEKsOE=/0x0:1600x1067/620x465/filters:focal(672x406:928x662):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
            title="Dining Journey"
            content="Welcome to the dining experiences around the globe!"
          />
        </Grid>

        <Grid item xs={6}>
          <Login />
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  background: #f5e6d3;
  padding: 20px;
  display: flex;
  height: 750px;
  flex-direction: column;
  align-items: center;
`;
