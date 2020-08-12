import React from "react";
import { BodyText } from "../components/styledelements";
import "../Stylesheets/register.css";
import { Form, Row, Col } from "react-bootstrap";
import { Button, Callout, Card } from "@blueprintjs/core";
import { validationSchema } from "../components/validation";
import axios from "axios";
import { Formik, Field } from "formik";
import Layout from "../components/layout";
import { MainDiv, FormLabel } from "../components/MyStyledComonents";

const errorStyling = {
  marginBottom: "20px",
  marginTop: "20px",
};

const AddUser = () => {
  // URI Encode data
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  // Initial Values for form
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  let responseData = {
    data: {
      auth: "",
      errorMsg: "",
    },
  };

  // Submission Handler
  const handleSubmit = async (data, { setErrors, setSubmitting, setValues }) => {
    setSubmitting(true);
    axios.post("http://localhost:3000/auth/register", encode(data)).then((response) => {
      responseData = { ...response };
      if (responseData.data.errorMsg && responseData.data.errorMsg !== "") {
        setErrors({ backendError: responseData.data.errorMsg });
      }
      if (responseData.data.message) {
        setValues({ ...data, response: responseData.data.message });
      }
      setSubmitting(false);
    });
  };

  return (
    <Layout>
      <MainDiv>
        <BodyText style={{ color: "white", textAlign: "center" }}>Register User</BodyText>
        <Card className={`form-jumbo`}>
          <h1>Add New User</h1>
          <hr />
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, dirty }) => (
              <Form onSubmit={handleSubmit}>
                {errors.backendError !== undefined && errors.backendError !== "" ? (
                  <Callout style={errorStyling} intent="danger">
                    {errors.backendError}
                  </Callout>
                ) : null}
                {values.response !== undefined && values.response !== "" ? (
                  <Callout style={errorStyling} intent="success">
                    {values.response}
                  </Callout>
                ) : null}
                <Row>
                  <Col>
                    <Form.Group controlId="first_name">
                      <FormLabel>First Name</FormLabel>
                      <Field type="input" name="first_name" placeholder="Enter First Name" as={Form.Control} />
                      {errors.first_name !== undefined && errors.first_name !== "" && touched.first_name ? (
                        <Callout style={errorStyling} intent="warning">
                          {errors.first_name}
                        </Callout>
                      ) : null}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="last_name">
                      <FormLabel>Last Name</FormLabel>
                      <Field type="input" name="last_name" placeholder="Enter Last Name" as={Form.Control} />
                      {errors.last_name !== undefined && errors.last_name !== "" && touched.last_name ? (
                        <Callout style={errorStyling} intent="warning">
                          {errors.last_name}
                        </Callout>
                      ) : null}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formBasicEmail">
                  <FormLabel>Email address</FormLabel>
                  <Field type="email" placeholder="Enter email" name="email" as={Form.Control} />
                  {errors.email !== undefined && errors.email !== "" && touched.email ? (
                    <Callout style={errorStyling} intent="warning">
                      {errors.email}
                    </Callout>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="Phone">
                  <FormLabel>Phone Number</FormLabel>
                  <Field type="text" placeholder="Enter phone number" name="phone" as={Form.Control} />
                  {errors.phone !== undefined && errors.phone !== "" && touched.phone ? (
                    <Callout style={errorStyling} intent="warning">
                      {errors.phone}
                    </Callout>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <FormLabel>Password</FormLabel>
                  <Field type="password" placeholder="Enter A New Password" name="password" as={Form.Control} />
                  {errors.password !== undefined && errors.password !== "" && touched.password ? (
                    <Callout style={errorStyling} intent="warning">
                      {errors.password}
                    </Callout>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                  <FormLabel>Confirm Password</FormLabel>
                  <Field type="password" placeholder="Confirm new password" name="confirmPassword" as={Form.Control} />
                  {errors.confirmPassword !== undefined && errors.confirmPassword !== "" && touched.confirmPassword ? (
                    <Callout style={errorStyling} intent="warning">
                      {errors.confirmPassword}
                    </Callout>
                  ) : null}
                </Form.Group>
                <Button
                  intent="primary"
                  outlined
                  minimal
                  fill
                  type="submit"
                  className="submit-btn"
                  rightIcon={`add`}
                  disabled={isSubmitting || !dirty}
                >
                  Add User
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </MainDiv>
    </Layout>
  );
};

export default AddUser;
