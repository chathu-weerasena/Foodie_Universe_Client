import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
//import styled from "styled-components";
import { Link } from "react-router-dom";
import { CategoryCard } from "../components";
import { Login, SignUp } from "./index";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Homepage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Link to={"/photos"}>
            <CategoryCard
              image="https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg"
              title="Photos"
              content="Welcome to the tasty captures of your favorite dishes!"
            />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={"/restaurants"}>
            <CategoryCard
              image="https://cdn.vox-cdn.com/thumbor/7HRjMUBf0ObMoA33zNPSYJEKsOE=/0x0:1600x1067/620x465/filters:focal(672x406:928x662):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
              title="Restaurants"
              content="Welcome to the dining experiences around the globe!"
            />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Login />
        </Grid>
      </Grid>
    </Box>
  );
};

// const Container = styled.div`
//   margin: 20px;
// `;
