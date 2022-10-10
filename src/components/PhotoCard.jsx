import React, { useState } from "react";
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

export const PhotoCard = (props) => {
  const { imageUrl, description, createdAt, updatedAt, userId } = props;
  const [commentBox, setCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Card sx={{ marginBottom: "16px" }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: "100%" }}
            image={imageUrl}
          />
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
        <Grid item xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {description}
              {createdAt}
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

            {commentBox && <Comments />}
          </CardContent>
          <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar />
              <Typography>
                username <br />
                posted date
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
