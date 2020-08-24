import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout";
import { MainDiv } from "../../components/MyStyledComonents";
import { Card, FormGroup, Label, RadioGroup, Radio, Button, HTMLSelect } from "@blueprintjs/core";
import PartOne from "./new-inspection-part-one";
import Context from "../../store/context";
import axios from "axios";
import { useCookies } from "react-cookie";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
import { Formik, Field, FieldArray, Form } from "formik";

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

  //Proceed to next Step.
  const nextStep = () => {
    const { step } = pageState;
    setPageState({ ...pageState, step: step + 1 });
  };

  //Go to Previous Step.
  const prevStep = () => {
    const { step } = pageState;
    if (step === 1) {
      return null;
    } else {
      setPageState({ ...pageState, step: step - 1 });
    }
  };

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
    <Layout>
      <MainDiv>
        <Card>
          <h1>New Inspection</h1>
          <hr />
          <PartOne currentStep={1} state={state} />
          <Formik initialValues={{ answers }} onSubmit={() => {}}>
            {({ values, handleChange }) => (
              <Form>
                <FieldArray name="answers">
                  {() => (
                    <div>
                      {values.answers.map((question, index) => {
                        return (
                          <>
                            <FormGroup key={question.id}>
                              <Label>{`${index + 1}.  ${question.question}`}</Label>
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
                            <hr />
                          </>
                        );
                      })}
                    </div>
                  )}
                </FieldArray>
                <pre>{JSON.stringify(values)}</pre>
              </Form>
            )}
          </Formik>
        </Card>
      </MainDiv>
    </Layout>
  );
};

export default NewInspection;
