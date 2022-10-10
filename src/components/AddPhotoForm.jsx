import React, { useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { Title, Input, Button } from "../styled";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

export const AddPhotoForm = () => {
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "lpsty2kc");

    //post request to Cloudinary, remember to change to your own link
    const res = await axios("https://http://localhost:3000/", {
      method: "POST",
      body: data,
    });

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImage(file.url); //put the url in local state, next step you can send it to the backend
  };

  const submit = (event) => {
    event.preventDefault();
    setImage("");
    setDescription("");
  };

  return (
    <Container>
      {" "}
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
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: "10%" }}
            image={
              image
                ? image
                : "https://i.pinimg.com/originals/6e/84/df/6e84df47aa729a8092748f57c2a6cc49.png"
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
