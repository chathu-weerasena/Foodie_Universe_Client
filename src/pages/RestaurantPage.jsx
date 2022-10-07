import { Title } from "../styled";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <Title> Restaurants!</Title>
      {!restaurants
        ? "Loading"
        : restaurants.map((restaurant, i) => (
            <div key={i}>
              <RestaurantCard
                id={restaurant.id}
                imageUrl={restaurant.name}
                address={restaurant.address}
                description={restaurant.description}
              />
            </div>
          ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
