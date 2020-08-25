import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout";
import { MainDiv } from "../../components/MyStyledComonents";
import { Card, FormGroup, Label, Button, HTMLSelect } from "@blueprintjs/core";
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

const FormLabel = styled(Label)`
  font-size: 16px;
  &:first-letter {
    font-weight: bold;
  }
`;

const spinnerStyling = css`
  margin: 25% auto;
  position: relative;
  top: 45%;
`;

const NewInspection = () => {
  const [cookies, setCookies] = useCookies(["housekeepr"]);
  const token = cookies.housekeepr;
  const [pageState, setPageState] = useState({ questions: [], loading: true, step: 1 });
  const { state } = useContext(Context);
  const currentDate = new Date();

  useEffect(() => {
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

  const answers = pageState.questions.map((q, index) => {
    return { id: q.id, question: q.question, answer: "" };
  });

  return (
    <>
      <Layout>
        <MainDiv>
          <Card>
            <h1>New Inspection</h1>
            <hr />
            <PartOne currentStep={1} state={state} />
            <Formik
              initialValues={{
                inspectedBy: state.id,
                date: `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`,
                roomName: "",
                answers,
              }}
              onSubmit={(data) => {
                console.log(data);
              }}
              validationSchema={validationSchema}
            >
              {({ values, handleChange, errors, dirty }) => (
                <Form>
                  <Prompt message="You have unsaved changes, are you sure you want to leave this page?" when={dirty} />
                  <FieldArray name="answers">
                    {() => (
                      <div>
                        {values.answers.map((question, index) => {
                          return (
                            <>
                              <Card style={{ margin: "10px 0" }}>
                                <FormGroup key={question.id} intent="success">
                                  <FormLabel>
                                    {`${index + 1}.  ${question.question} `}
                                    <span className="bp3-text-muted">{`(${pageState.questions[index].category})`}</span>
                                  </FormLabel>
                                  <HTMLSelect
                                    name={`answers[${index}].answer`}
                                    onChange={handleChange}
                                    defaultValue="default"
                                  >
                                    <option value="default" disabled>
                                      -- Please Select an Answer --
                                    </option>
                                    <option value="Satisfactory">Satisfactory</option>
                                    <option value="Unsatisfactory">Unsatisfactory</option>
                                  </HTMLSelect>
                                </FormGroup>
                              </Card>
                            </>
                          );
                        })}
                      </div>
                    )}
                  </FieldArray>
                  <Button type="submit" intent="primary" minimal outlined rightIcon="tick">
                    Complete Inspection
                  </Button>
                  <pre>{JSON.stringify(errors)}</pre>
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
