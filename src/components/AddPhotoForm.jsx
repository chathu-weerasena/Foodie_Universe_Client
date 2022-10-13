import React, { useState } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { Title, Input, Button } from "../styled";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
//import CardMedia from "@mui/material/CardMedia";

import { addedNewPhoto } from "../store/photos/thunks";

export const AddPhotoForm = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files[0];
    const data = new FormData();
    data.append("file", files);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "rdp9fwl6");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dq0rxnx3i/image/upload",
      { method: "POST", body: data }
    );

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImage(file.url); //put the url in local state, next step you can send it to the backend
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(addedNewPhoto(image, description, type, title));
    setImage("");
    setDescription("");
    setType("");
    setTitle("");
  };
  const options = [
    {
      value: "1",
      label: "photos",
    },
    {
      value: "2",
      label: "restaurants",
    },
    {
      value: "3",
      label: "news",
    },
  ];
  return (
    <Container>
      <Grid className="addphoto" item xs={10}>
        <Stack direction="column" spacing={2} sx={{ margin: "8px 0" }} xs={6}>
          <Title> Add new Photo!</Title>
          <form onSubmit={submit}>
            <select>
              <option> Category</option>
              {options.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Input
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <Input
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <Input
              placeholder="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <br />
            <Input type="file" onChange={uploadImage} />
            <Stack>
              <Image
                style={{ width: 250 }}
                src={
                  image
                    ? image
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
              />
            </Stack>
            {image ? (
              <Title style={{ fontSize: 20 }}>Succesfully uploaded!</Title>
            ) : (
              ""
            )}
            <Button type="submit">Post</Button>
          </form>
        </Stack>
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