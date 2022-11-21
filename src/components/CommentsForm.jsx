import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { addedNewComment } from "../store/posts/thunks";

export const CommentsForm = ({ postId, user }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const newComment = (comment) => {
    const addedComment = { id: comments.length + 1, comment };
    const newComments = [...comments, addedComment];
    setComments(newComments);
    setComment("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newComment(comment);
    dispatch(addedNewComment(comment, postId));
  };
  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p> {comment.comment}</p>
          </div>
        );
      })}
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", marginTop: "16px" }}
      >
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <TextField
            id="outlined-multiline-flexible"
            label="Your comment"
            multiline
            maxRows={4}
            sx={{ width: "100%" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            size="small"
            type="submit"
            variant="outlined"
            sx={{ height: "100%" }}
          >
            Add Comment
          </Button>
        </Stack>
      </form>
    </>
  );
};
