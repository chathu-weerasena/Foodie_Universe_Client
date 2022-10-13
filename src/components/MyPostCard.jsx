import { Button } from "@mui/material";

export const MyPostCard = (props) => {
  const { id, postType, content } = props;
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
