import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Title } from "../styled";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

import { fetchedRestaurants } from "../store/restaurants/thunks";
import { selectRestaurants } from "../store/restaurants/selectors";
import { RestaurantCard } from "../components";

export const RestaurantPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);
  console.log("Restaurants", restaurants);

  useEffect(() => {
    dispatch(fetchedRestaurants());
  }, [dispatch]);
  return (
    <Container>
      <Grid>
        <Grid item xs={12}>
          <Title> Restaurants!</Title>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "980px" }}>
        {!restaurants
          ? "Loading"
          : restaurants.map((restaurant, i) => (
              <RestaurantCard
                key={i}
                id={restaurant.id}
                name={restaurant.name}
                address={restaurant.address}
                description={restaurant.description}
                createdAt={restaurant.createdAt}
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
