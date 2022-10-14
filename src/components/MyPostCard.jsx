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

export const MyPostCard = (props) => {
  const { id, postType, content } = props;
  const [commentBox, setCommentBox] = useState(false);

  return (
    <div>
      <h4> Posts</h4>
      <h5>
        {" "}
        Post Id: {id} <br />
        Post Type: {postType}
      </h5>
      <p> {content} </p>
      <Button> Edit</Button>
      <Button> Delete</Button>
    </div>
  );
};
