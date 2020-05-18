import React, { useState } from 'react';
import { PageLayout, Title, BodyText } from "../components/styledelements";
import "../Stylesheets/login.css"
import { Jumbotron, Form, Button }  from "react-bootstrap";
import {css} from "@emotion/core"

const Login = () => {
    const submitForm = (e) => {
        e.preventDefault()
        alert("Logging In")
    }

    return (
        <PageLayout className={`login-main`}>
            <Title style={{color: "white", textAlign: "center", marginTop: "8vh"}}>HouseKeepr</Title>
            <BodyText style={{color: "white", letterSpacing: "1.68px", textAlign: "center"}}>Chaminuka Lodge</BodyText>
            <BodyText style={{color: "white", letterSpacing: "1.68px", textAlign: "center"}}>Login</BodyText>
            <Jumbotron>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-btn" onClick={e => submitForm(e)}>
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </PageLayout>
    );
};

export default Login