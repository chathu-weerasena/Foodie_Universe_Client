import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Title } from "../styled";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

import { fetchedRestaurants } from "../store/posts/thunks";
import { selectRestaurants } from "../store/posts/selectors";
import { RestaurantCard } from "../components";
import { NewsFeed } from "./index";

export const RestaurantPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);
  //console.log("Restaurants", restaurants);

  useEffect(() => {
    dispatch(fetchedRestaurants());
  }, [dispatch]);
  return (
    <Container>
      <Grid>
        <Grid item xs={12}>
          <Title> Dining Out!</Title>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={8}>
          {!restaurants
            ? "Loading"
            : restaurants.map((restaurant, i) => (
                <RestaurantCard
                  key={i}
                  restaurant={restaurant.restaurant}
                  user={restaurant.user}
                  comments={restaurant.comments}
                />
              ))}
        </Grid>
        <Grid item sm={4}>
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
