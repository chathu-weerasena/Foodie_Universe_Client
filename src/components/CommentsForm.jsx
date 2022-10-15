import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addedNewComment } from "../store/posts/thunks";

export const CommentsForm = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

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
    dispatch(addedNewComment(comment));
  };
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p> Comment: {comment.comment}</p>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <h4> Comments</h4>

        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Comment
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Add Comment
        </button>
      </form>
    </div>
  );
};
