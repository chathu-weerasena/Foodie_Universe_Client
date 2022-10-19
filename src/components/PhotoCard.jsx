import React, { useState } from "react";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import { selectToken, selectUser } from "../store/user/selectors";
import { CommentsForm } from "../components";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const PhotoCard = ({ comments, photo, user }) => {
  const [commentBox, setCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);

  const User = useSelector(selectUser);

  return (
    <Card sx={{ marginBottom: "16px" }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250px"
            sx={{ width: "100%" }}
            image={photo.image}
          />
          {/* <h5> {photo.content} </h5> */}
          {/* <AspectRatio
            sx={{
              flex: "100%",
            }}
            ratio="4/3"
            width={{ width: "100%" }}
          >
            <img src={photo.image} style={{ width: "100%" }} />
          </AspectRatio> */}
        </Grid>

        <Grid item xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {photo.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <strong>{photo.content}</strong>
              {photo.createdAt}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
              <Button
                size="small"
                variant={liked ? "contained" : "outlined"}
                onClick={() => setLiked(!liked)}
              >
                Like
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={() => setCommentBox(!commentBox)}
              >
                Comment
              </Button>
            </Stack>
            <Stack>
              {comments.map((comment) => (
                <List
                  key={comment.id}
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem disablePadding>{comment.content}</ListItem>
                </List>
              ))}
            </Stack>
            {/* {comments.map((comment) => (
                  <ListItemText key={comment.id} primary={comment.content} />
                ))} */}
            {commentBox && <CommentsForm postId={photo.postId} />}
          </CardContent>
          <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt="profile pic" src={user.image} />
              <Typography>
                {user.firstName} {user.lastName}
                <br />
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
