import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { useDispatch } from "react-redux";
import moment from "moment";

import styled from "styled-components";
import { Title, Input, Button } from "../styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import { addNewPost } from "../store/posts/thunks";

export const AddPostForm = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [postType, setPostType] = useState("");
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));

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
    dispatch(
      addNewPost(postType, image, content, name, title, address, endDate)
    );
    setImage("");
    setContent("Fresh Out of the Oven");
    setName("");
    setPostType("");
    setAddress("");
    setTitle("Test Pizza");
    setEndDate("");
  };
  const options = [
    {
      value: "1",
      label: "Food Print",
    },
    {
      value: "2",
      label: "Dining Out",
    },
    {
      value: "3",
      label: "News",
    },
  ];
  return (
    <Container>
      <Grid className="addphoto" item xs={10}>
        <Stack direction="column" spacing={2} sx={{ margin: "8px 0" }} xs={6}>
          <Title> New Post!</Title>
          <form onSubmit={submit}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Post Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={postType}
                label="Post Type"
                onChange={(e) => {
                  setPostType(e.target.value);
                  console.log(postType);
                }}
              >
                {options.map((option, i) => (
                  <MenuItem key={i} value={option.value}>
                    {" "}
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {postType === "1" ? (
              <>
                <Input
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <Input
                  placeholder="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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
              </>
            ) : (
              ""
            )}
            {postType === "2" ? (
              <>
                <Input
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <Input
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                <Input
                  placeholder="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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
              </>
            ) : (
              ""
            )}
            {postType === "3" ? (
              <>
                <Input
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <Input
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                <Input
                  placeholder="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <br />
                <Input
                  type="date"
                  placeholder="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <br />
              </>
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
