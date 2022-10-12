import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Title } from "../styled";

import { fetchedNews } from "../store/news/thunks";
import { selectNews } from "../store/news/selectors";
import { NewsCard } from "../components";
import { Container } from "@mui/system";

export const NewsFeed = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchedNews());
  }, [dispatch]);

  return (
    <Container>
      <Grid item xs={4}>
        <Title> News!</Title>
        <Grid>
          {!news
            ? "Loading"
            : news.map((news, i) => (
                <NewsCard
                  key={i}
                  id={news.id}
                  title={news.title}
                  address={news.address}
                  content={news.content}
                />
              ))}
        </Grid>
      </Grid>
    </Container>
  );
};

// const Container = styled.div`
//   background: #f5e6d3;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
