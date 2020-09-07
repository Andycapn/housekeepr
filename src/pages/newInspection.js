import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout";
import { MainDiv } from "../../components/MyStyledComonents";
import { Card, FormGroup, Label, Button, HTMLSelect, Callout } from "@blueprintjs/core";
import PartOne from "./new-inspection-part-one";
import Context from "../../store/context";
import axios from "axios";
import { useCookies } from "react-cookie";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { ClipLoader } from "react-spinners";
import { Formik, FieldArray, Form } from "formik";
import { validationSchema } from "../../components/NewInspectionValidation";
import { Prompt } from "react-router-dom";
import { useHistory } from "react-router";
import { FormControl } from "react-bootstrap";

const FormLabel = styled(Label)`
  font-size: 16px;
`;

const spinnerStyling = css`
  margin: 25% auto;
  position: relative;
  top: 45%;
`;

const NewInspection = () => {
  const [cookies, setCookies] = useCookies(["housekeepr"]);
  const token = cookies.housekeepr;
  const [pageState, setPageState] = useState({
    questions: [],
    loading: true,
    saved: false,
    submitting: false,
    step: 1,
  });
  const { state } = useContext(Context);
  const currentDate = new Date();
  let history = useHistory();
  const date = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;

  useEffect(() => {
    // Fetch Checklist Questions from the database.
    axios
      .get("http://localhost:3000/inspections/getQuestions", { headers: { Authorization: `${token}` } })
      .then((response) => {
        setPageState({
          ...pageState,
          questions: [...response.data],
          loading: false,
        });
      });
  }, []);

  if (pageState.loading) {
    return (
      <Layout>
        <div style={{ textAlign: "center" }}>
          <ClipLoader css={spinnerStyling} color={"#41b7fc"} />
        </div>
      </Layout>
    );
  }

  //Initial State for form
  const answers = pageState.questions.map((q, index) => {
    return { id: q.id, question: q.question, category: q.category, answer: "" };
  });

  // Spread each unique category into an array
  const categories = [
    ...new Set(
      pageState.questions.map((q) => {
        return q.category;
      })
    ),
  ]
    .sort()
    .reverse();

  // URI Encode data
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  // Submission Handler
  const handleSubmit = async (data) => {
    setPageState({ ...pageState, submitting: true });
    console.log(data);
    axios
      .post(
        "http://localhost:3000/inspections/postInspection",
        encode({
          inspectionData: JSON.stringify(data),
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: cookies.housekeepr },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setPageState({ ...pageState, saved: true, submitting: false });
          setTimeout(() => history.push("/dashboard"), 2000);
        }
      });
  };

  return (
    <>
      <Layout>
        <MainDiv>
          <Card>
            <h1 className="bp3-heading" style={{ color: "#05B2DC" }}>
              New Inspection
            </h1>
            <hr />
            <Formik
              initialValues={{
                inspectedBy: state.id,
                date: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`,
                roomName: "",
                answers,
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ values, handleChange, errors, dirty }) => (
                <Form>
                  <Prompt
                    message="You have unsaved changes, are you sure you want to leave this page?"
                    when={dirty && !pageState.saved}
                  />
                  <FormGroup>
                    <FormLabel>Inspected By</FormLabel>
                    <FormControl type="input" value={state.first_name} disabled />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Date</FormLabel>
                    <FormControl type="text" value={date} disabled />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Room</FormLabel>
                    <FormControl as="select" defaultValue="default" onChange={handleChange} name="roomName">
                      <option value="default" disabled>
                        -- Please Select An Answer --
                      </option>
                      <option value="Chisunka">Chisunka</option>
                    </FormControl>
                  </FormGroup>
                  {categories.map((category, index) => (
                    <>
                      <Card style={{ margin: "10px 0" }} elevation="1">
                        <Callout style={{ backgroundColor: "#05B2DC" }} icon={null}>
                          <h3 style={{ color: "white" }} className="bp3-heading">
                            {category}
                          </h3>
                        </Callout>
                        <hr />
                        <FieldArray name="answers">
                          {() => (
                            <div>
                              {values.answers.map((question, index) => {
                                if (category === pageState.questions[index].category) {
                                  return (
                                    <>
                                      <FormGroup key={question.id} intent="success">
                                        <FormLabel
                                          style={{ fontWeight: "500", marginBottom: "20px" }}
                                        >{`${question.question} `}</FormLabel>
                                        <HTMLSelect
                                          name={`answers[${index}].answer`}
                                          onChange={handleChange}
                                          defaultValue="default"
                                        >
                                          <option value="default" disabled>
                                            -- Please Select an Answer --
                                          </option>
                                          {pageState.questions[index].category === categories[1] ? (
                                            <>
                                              <option value="Yes">Yes</option>
                                              <option value="No">No</option>
                                            </>
                                          ) : (
                                            <>
                                              <option value="Satisfactory">Satisfactory</option>
                                              <option value="Unsatisfactory">Unsatisfactory</option>
                                            </>
                                          )}
                                        </HTMLSelect>
                                      </FormGroup>
                                      <hr />
                                    </>
                                  );
                                } else {
                                  return null;
                                }
                              })}
                            </div>
                          )}
                        </FieldArray>
                      </Card>
                    </>
                  ))}
                  {pageState.saved ? (
                    <Callout intent="success" style={{ marginBottom: "10px" }}>
                      <h6 className="bp3-heading">Inspection Saved, You will Be Redirected Soon</h6>
                    </Callout>
                  ) : null}
                  <Button
                    type="submit"
                    intent="primary"
                    minimal
                    outlined
                    rightIcon="tick"
                    loading={pageState.submitting}
                  >
                    Complete Inspection
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </MainDiv>
      </Layout>
    </>
  );
};

export default NewInspection;
