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
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
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

export const RestaurantCard = ({ comments, restaurant, user }) => {
  const [commentBox, setCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Card sx={{ marginBottom: "16px" }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250px"
            sx={{ width: "100%" }}
            image={restaurant.image}
          />
        </Grid>

        <Grid item xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {restaurant.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <strong> {restaurant.content}</strong>
              {restaurant.createdAt}
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
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {comments.map((comment) => (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={comment.user.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={comment.user.firstName}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {}
                            </Typography>
                            {comment.content}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                ))}
              </List>
            </Stack>

            {commentBox && <CommentsForm postId={restaurant.postId} />}
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
