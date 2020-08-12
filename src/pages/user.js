import React, { useContext, useState } from "react";
import Layout from "../components/layout";
import Context from "../store/context";
import { MainDiv } from "../components/MyStyledComonents";
import "./Dashboard/dashboard.css";
import { Form, FormControl, FormGroup, Row, Col } from "react-bootstrap";
import { Formik, Field } from "formik";
import { validationSchema } from "../components/validation";
import axios from "axios";
import styled from "@emotion/styled";
import { Card, Button } from "@blueprintjs/core";

const FormLabel = styled(Form.Label)`
  font-weight: bold;
`;

let responseData = {
  data: {
    auth: "",
    errorMsg: "",
  },
};

// URI Encode data
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
// Submission Handler
const handleSubmit = async (data, { setErrors, setSubmitting, setValues }) => {
  console.log(data);
  setSubmitting(true);
  axios.post("http://localhost:3000/auth/updateUser", encode(data)).then((response) => {
    responseData = { ...response };
    if (responseData.data.errorMsg && responseData.data.errorMsg !== "") {
      setErrors({ backendError: responseData.data.errorMsg });
    }
    if (responseData.data.message) {
      setValues({ ...data, response: responseData.data.message });
    }
  });
};

function Dashboard() {
  const { state } = useContext(Context);
  const [userPageState, setUserPageState] = useState({
    passwordIsEditing: false,
  });

  // Initial Values for form
  const initialValues = {
    first_name: state.first_name,
    last_name: state.last_name,
    email: state.email,
    phone: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Layout>
      <>
        <main className="dashboard-main">
          <section className="main-app-section">
            <MainDiv>
              <Card>
                <h1>Details</h1>
                <hr />
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                  {({ values, handleChange, handleBlur, handleSubmit, errors, touched, dirty }) => (
                    <Form>
                      <FormGroup>
                        <Row>
                          <Col>
                            <FormLabel>First Name</FormLabel>
                          </Col>
                          <Col>
                            <FormLabel>Last Name</FormLabel>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col>
                            <Field type="input" value={values.first_name} name="first_name" as={FormControl} />
                          </Col>
                          <Col>
                            <Field type="input" value={values.last_name} name="last_name" as={FormControl} />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <FormLabel>Email Address</FormLabel>
                        <Field type="email" value={values.email} name="email" as={FormControl} />
                      </FormGroup>
                      <Button
                        type="submit"
                        intent={!dirty ? "" : "success"}
                        minimal
                        outlined
                        disabled={!dirty}
                        icon="saved"
                      >
                        Save Changes
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card>
              <Card>
                <h1>Password</h1>
                <hr />
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                  {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <Field
                          type="password"
                          name="currentPassword"
                          value={userPageState.passwordIsEditing ? "" : "*********"}
                          placeholder={userPageState.passwordIsEditing ? "Enter your old password" : ""}
                          as={FormControl}
                          disabled={!userPageState.passwordIsEditing}
                        />
                      </FormGroup>
                      {userPageState.passwordIsEditing ? (
                        <>
                          <FormGroup>
                            <FormLabel>New Password</FormLabel>
                            <Field
                              type="password"
                              name="newPassword"
                              placeholder="Enter a new password"
                              as={FormControl}
                            />
                          </FormGroup>
                          <Button type="submit" icon="saved" style={{ marginRight: " 5px" }}>
                            Save Changes
                          </Button>
                          <Button
                            onClick={(e) => {
                              setUserPageState({ passwordIsEditing: false });
                            }}
                            icon="cross"
                            style={{ marginRight: " 5px" }}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : null}
                      {!userPageState.passwordIsEditing ? (
                        <Button onClick={(e) => setUserPageState({ passwordIsEditing: true })}>Edit</Button>
                      ) : null}
                    </Form>
                  )}
                </Formik>
              </Card>
            </MainDiv>
          </section>
        </main>
      </>
    </Layout>
  );
}

export default Dashboard;
