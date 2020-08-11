import React, { useContext } from "react";
import Layout from "../components/layout";
import Context from "../store/context";
import { MainDiv } from "../components/MyStyledComonents";
import "./Dashboard/dashboard.css";
import { Jumbotron, Form, FormControl, FormGroup } from "react-bootstrap";
import { Formik, Field } from "formik";
import { validationSchema } from "../components/validation";
import axios from "axios";

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
    first_name: "",
    last_name: "",
    email: "",
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
              <Jumbotron>
                <h1>My Profile</h1>
                <hr />
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                ></Formik>
              </Jumbotron>
            </MainDiv>
          </section>
        </main>
      </>
    </Layout>
  );
}

export default Dashboard;
