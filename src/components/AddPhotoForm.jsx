import React, { useState } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { Title, Input, Button } from "../styled";
import Grid from "@mui/material/Grid";
//import CardMedia from "@mui/material/CardMedia";

import { addedNewPhoto } from "../store/photos/thunks";

export const AddPhotoForm = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "rdp9fwl6");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dq0rxnx3i/image/upload"
    );

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImage(file.url); //put the url in local state, next step you can send it to the backend
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(addedNewPhoto({ image, description }));
    setImage("");
    setDescription("");
  };

  return (
    <Container>
      <Grid>
        <Title> Add new Photo!</Title>
        <form onSubmit={submit}>
          <Input
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <Input type="file" onChange={uploadImage} />{" "}
          <Button type="submit">Post</Button>
          <Image
            style={{ width: 100 }}
            src={
              image
                ? image
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            }
          />
          {image ? (
            <Title style={{ fontSize: 20 }}>Succesfully uploaded!</Title>
          ) : (
            ""
          )}
        </form>
      </Grid>
    </Container>
  );
};
const Container = styled.div`
  background: #f5e6d3;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
