import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/user_action";
import Auth from "../hoc/auth";
import styled from "styled-components";
import axios from "axios";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const loginUser = await axios.get("http://localhost:3000/login");

    console.log(loginUser.data);
  }

  useEffect(() => {
    getData();
  }, []);
  const handleChange = (e) => {
    const { value, type } = e.target;
    if (type === "email") setEmail(value);
    else if (type === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleChange} />
        <label>Password</label>
        <input type="password" value={password} onChange={handleChange} />

        <br />
        <button>Login</button>
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;
export default Auth(LoginPage, false);