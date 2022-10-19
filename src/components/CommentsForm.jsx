import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { addedNewComment } from "../store/posts/thunks";

export const CommentsForm = ({ postId, user }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  // const { postId } = useParams();

  const newComment = (comment) => {
    const addedComment = { id: comments.length + 1, comment };
    const newComments = [...comments, addedComment];
    setComments(newComments);
    //console.log(newComments);
    setComment("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newComment(comment);
    dispatch(addedNewComment(comment, postId));
  };
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p> {comment.comment}</p>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            sx={{ width: "100%" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <Button size="small" type="submit" variant="outlined">
          Add Comment
        </Button>
      </form>
    </div>
  );
};
