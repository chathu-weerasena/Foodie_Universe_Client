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

import { selectToken, selectUser } from "../store/user/selectors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Comments = () => (
  <TextField
    id="outlined-multiline-flexible"
    label="Multiline"
    multiline
    maxRows={4}
    sx={{ width: "100%" }}
  />
);

export const PhotoCard = ({ photo }) => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  //const { createdAt, image, title, photos } = props;
  const [commentBox, setCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Card sx={{ marginBottom: "16px" }}>
      {photo.photos.map((photo) => (
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt="green iguana"
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
          <img src={imageUrl} style={{ width: "100%" }} />
        </AspectRatio> */}
        </Grid>
      ))}
      <Grid container>
        <Grid item xs={8}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <strong>{photo.postType}</strong>
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
              {user && token ? (
                <>
                  <Button size="small" variant="outlined">
                    Edit
                  </Button>
                  <Button size="small" variant="outlined">
                    Delete
                  </Button>
                </>
              ) : (
                " "
              )}
            </Stack>

            {commentBox && <Comments />}
          </CardContent>
          <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar />
              <Typography>
                {user.firstName} <br />
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
