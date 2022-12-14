import Button from "@mui/material/Button";
import styled from "styled-components";
import { Input, Title, LinkWord } from "../styled";
import * as React from "react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const Login = () => {
  const [email, setEmail] = useState("chathu@chathu.com");
  const [password, setPassword] = useState("chathu");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title>Login</Title>
        <form onSubmit={submitForm}>
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
          <Button type="submit " variant="contained" color="success">
            Login
          </Button>
        </form>
        <SubText>
          Don't have an account yet? Click&nbsp;
          <Link to="/signup" style={LinkWord}>
            here
          </Link>{" "}
          to sign up
        </SubText>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  margin: 15%;
`;

const SubText = styled.p`
  text-align: center;
  color: #0f0f0f;
  padding: 20px 0px 5px 0px;
`;
