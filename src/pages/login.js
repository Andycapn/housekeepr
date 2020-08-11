import React, { useRef, useState, useEffect } from "react";
import { PageLayout, Title, BodyText } from "../components/styledelements";
import "../Stylesheets/login.css";
import { Jumbotron, Form } from "react-bootstrap";
import { Button, Callout } from "@blueprintjs/core";
import Logo from "../Images/icons/cleaning.svg";
import axios from "axios";
import { Redirect } from "react-router";

const Login = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    errorMsg: "",
    response: "",
    auth: "",
  });

  let errorBox = useRef(null);

  // URI Encode data
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  //On Change Handler for Form State
  const handleChange = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const HandleSubmit = (e) => {
    // Check If fields are empty
    if (loginState.email === "" || loginState.password === "") {
      setLoginState({
        ...loginState,
        errorMsg: "All fields are required",
      });
      e.preventDefault();
      return;
    } else if (loginState.email !== "" && loginState.password !== "") {
      // Remove Error Message when form is filled
      setLoginState({ ...loginState, errors: "" });
    }
    axios
      .post("http://localhost:3000/auth/login", encode({ ...loginState }), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        withCredentials: true,
      })
      .then((response) => {
        setLoginState({
          ...loginState,
          ...response.data,
        });
      })
      .catch((error) => {
        if (error) {
          setLoginState({
            ...error.response.data,
          });
        }
      });
    e.preventDefault();
  };

  if (loginState.auth === "true") {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <PageLayout className={`login-main`}>
      <img src={Logo} className="logo" alt="" />
      <Title style={{ color: "white", textAlign: "center" }}>HouseKeepr</Title>
      <BodyText style={{ color: "white", textAlign: "center" }}>Chaminuka Lodge</BodyText>
      <BodyText style={{ color: "white", textAlign: "center" }}>Login</BodyText>
      <Jumbotron className={`form-jumbo`}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="email" name="email" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          {loginState.errorMsg !== "" ? (
            <Callout style={{ marginBottom: "20px" }} intent="danger">
              {loginState.errorMsg}
            </Callout>
          ) : null}
          <Button
            intent="primary"
            outlined
            minimal
            fill
            type="submit"
            className="submit-btn"
            onClick={(e) => HandleSubmit(e)}
            rightIcon={`log-in`}
          >
            Log in
          </Button>
        </Form>
      </Jumbotron>
    </PageLayout>
  );
};

export default Login;
