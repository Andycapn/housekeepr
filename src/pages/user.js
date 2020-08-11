import React, { useContext } from "react";
import Layout from "../components/layout";
import Context from "../store/context";
import { MainDiv } from "../components/MyStyledComonents";
import "./Dashboard/dashboard.css";
import { Jumbotron, Form, FormControl, FormGroup, Row, Col } from "react-bootstrap";
import { Formik, Field } from "formik";
import { validationSchema } from "../components/validation";
import axios from "axios";
import styled from "@emotion/styled";
import { Card } from "@blueprintjs/core";

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
                  {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
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
                    </Form>
                  )}
                </Formik>
              </Card>
              <Card>
                <h1>Password</h1>
                <hr />
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                  {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => <Form></Form>}
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
