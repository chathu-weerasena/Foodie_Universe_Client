import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";

import styled from "styled-components";
import { Button, Input, Title } from "../styled";
import Stack from "@mui/material/Stack";

import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

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

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(signUp(name, email, password, image));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title>Sign Up</Title>
        <form onSubmit={submitForm}>
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <Button type="submit">Sign Up</Button>
        </form>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  margin: 15%;
`;
