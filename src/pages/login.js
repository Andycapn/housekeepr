import React, { useState } from "react";
import { PageLayout, Title, BodyText } from "../components/styledelements";
import "../Stylesheets/login.css";
import { Jumbotron, Form } from "react-bootstrap";
import { Button, Callout } from "@blueprintjs/core";
import Logo from "../Images/icons/cleaning.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("All fields are required");
    }
  };
  return (
    <PageLayout className={`login-main`}>
      <img src={Logo} className="logo" alt="" />
      <Title style={{ color: "white", textAlign: "center" }}>HouseKeepr</Title>
      <BodyText style={{ color: "white", textAlign: "center" }}>
        Chaminuka Lodge
      </BodyText>
      <BodyText style={{ color: "white", textAlign: "center" }}>Login</BodyText>
      <Jumbotron className={`form-jumbo`}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {error !== "" ? (
            <Callout style={{ marginBottom: "20px" }} intent="danger">
              {error}
            </Callout>
          ) : null}
          <Button
            intent="primary"
            outlined
            minimal
            fill
            type="submit"
            className="submit-btn"
            onClick={(e) => submitForm(e)}
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
