import React, { useState } from "react";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { selectToken, selectUser } from "../store/user/selectors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const NewsCard = (props) => {
  const { id, title, address, content, end_date } = props;
  const [liked, setLiked] = useState(false);

  return (
    <Card sx={{ marginBottom: "16px" }}>
      <Grid>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address}
            {content}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
            <Button
              size="small"
              variant={liked ? "contained" : "outlined"}
              onClick={() => setLiked(!liked)}
            >
              Like
            </Button>
          </Stack>
        </CardContent>
      </Grid>
    </Card>
  );
};
