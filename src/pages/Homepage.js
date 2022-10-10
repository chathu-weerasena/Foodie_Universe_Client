import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

import styled from "styled-components";
import { CategoryCard } from "../components";
import { Login } from "./index";
import { selectToken } from "../store/user/selectors";

export const Homepage = () => {
  const token = useSelector(selectToken);
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid></Grid>
          <CategoryCard
            image="https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg"
            title="Photos"
            content="Welcome to the tasty captures of your favorite dishes!"
          />
          {!token ? (
            ""
          ) : (
            <>
              <Link to={"/photos"}>
                <Button type="submit " variant="contained" color="success">
                  Explore More
                </Button>
              </Link>
            </>
          )}

          <Grid>
            <CategoryCard
              image="https://cdn.vox-cdn.com/thumbor/7HRjMUBf0ObMoA33zNPSYJEKsOE=/0x0:1600x1067/620x465/filters:focal(672x406:928x662):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
              title="Restaurants"
              content="Welcome to the dining experiences around the globe!"
            />
            {!token ? (
              ""
            ) : (
              <>
                <Link to={"/restaurants"}>
                  <Button type="submit " variant="contained" color="success">
                    Explore More
                  </Button>
                </Link>
              </>
            )}
          </Grid>
        </Grid>

        <Grid item xs={5}>
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
  flex-direction: column;
  align-items: center;
`;
