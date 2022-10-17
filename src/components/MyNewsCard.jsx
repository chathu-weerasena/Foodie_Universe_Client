import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { selectToken, selectUser } from "../store/user/selectors";
import { deletedPost } from "../store/posts/thunks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const MyNewsCard = ({ news, user }) => {
  //const { id, title, address, content, end_date } = props;
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <Card sx={{ marginBottom: "0px" }}>
      <Grid>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.address}
            {news.content}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                dispatch(deletedPost(news.postId));
                console.log("ID", news.postId);
              }}
            >
              Delete
            </Button>
          </Stack>
        </CardContent>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar> {user.image}</Avatar>
            <Typography>
              {user.firstName} {user.lastName}
              <br />
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Card>
  );
};
