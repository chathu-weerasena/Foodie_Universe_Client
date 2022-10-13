import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import { fetchedNews } from "../store/posts/thunks";
import { selectNews } from "../store/posts/selectors";
import { NewsCard } from "../components";
import { Container } from "@mui/system";

export const NewsFeed = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  //console.log("News", news);

  useEffect(() => {
    dispatch(fetchedNews());
  }, [dispatch]);

  return (
    <Container>
      <Grid item xs={6}>
        <Grid container sx={{ maxWidth: "500px" }}>
          {!news
            ? "Loading"
            : news.map((news, i) => (
                <NewsCard key={i} news={news.news} user={news.user} />
              ))}
        </Grid>
      </Grid>
    </Container>
  );
};
