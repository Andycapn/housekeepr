import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { MainDiv } from "../components/MyStyledComonents";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import { useHistory } from "react-router";
import { Callout, Card } from "@blueprintjs/core";

const spinnerStyling = css`
  margin: 25% auto;
  position: relative;
  top: 45%;
`;

const Inspection = () => {
  // Variable Declarations
  const [inspectionState, setInspectionState] = useState({ first_name: "", loading: true });
  const [cookies] = useCookies(["housekeepr"]);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (inspectionState.loading) {
      axios
        .get(`http://localhost:3000/inspections/getInspection/${id}`, {
          headers: { authorization: cookies.housekeepr },
        })
        .then((response) => {
          setInspectionState({ ...response.data, loading: false, results: JSON.parse(response.data.results) });
        })
        .catch((e) => {
          if (e.response.status === 404 || e.response.status === 400) {
            history.push("/dashboard", history.location);
          }
        });
    }
  }, [cookies.housekeepr, inspectionState.loading]);

  //Loading Screen
  if (inspectionState.loading) {
    return (
      <Layout>
        <div style={{ textAlign: "center" }}>
          <ClipLoader css={spinnerStyling} color={"#41b7fc"} />
        </div>
      </Layout>
    );
  }

  //Create an array of unique categories
  const categories = [
    ...new Set(
      inspectionState.results.map((result, index) => {
        return result.category;
      })
    ),
  ]
    .sort()
    .reverse();

  return (
    <Layout>
      <MainDiv>
        <Card>
          <div className="mb-3 mt-3" style={{ display: "flex" }}>
            <h2 className="bp3-heading" style={{ flexGrow: "1" }}>
              Inspection{" "}
              {`${inspectionState.first_name[0]}${inspectionState.last_name[0]}${inspectionState.inspection_id}`}
            </h2>
            <h2 className="bp3-heading">
              Room Name: <span style={{ color: "#05B2DC" }}>{inspectionState.room_name}</span>
            </h2>
          </div>
          <hr />
          <span style={{ display: "flex" }}>
            <p className="bp3-ui-text">
              Inspected By:{" "}
              <span style={{ color: "#05B2DC" }}>{`${inspectionState.first_name} ${inspectionState.last_name}`} </span>
            </p>
            <p className="bp3-ui-text" style={{ margin: "0 10px" }}>
              Inspected On:{" "}
              <span style={{ color: "#05B2DC" }}>{inspectionState.date.replace("T22:00:00.000Z", "")}</span>
            </p>
          </span>

          {categories.map((category) => {
            return (
              <Card style={{ margin: "10px 0" }} key={category}>
                <Callout
                  icon={null}
                  style={{ margin: "10px 0", display: "inline-block", backgroundColor: "#05B2DC", textAlign: "center" }}
                >
                  <h3 style={{ color: "#eee" }} className="bp3-heading">
                    {category}
                  </h3>
                </Callout>
                <hr />
                {inspectionState.results.map((result, index) => {
                  if (result.category === category) {
                    return (
                      <div style={{ margin: "5px 0" }} key={result.id}>
                        <h5 className="bp3-heading">{result.question}</h5>
                        <p className="bp3-running-text">
                          <div
                            style={{
                              display: "inline-block",
                              backgroundColor:
                                result.answer === "Satisfactory" ||
                                (result.category === "Maintenance" && result.answer === "No")
                                  ? "#6BF178"
                                  : "#FF5964",
                              color:
                                result.answer === "Unsatisfactory" ||
                                (result.category === "Maintenance" && result.answer === "Yes")
                                  ? "white"
                                  : "",
                              padding: "0.2rem 0.5rem",
                              borderRadius: "5px",
                              fontWeight: "400",
                            }}
                          >
                            {result.answer}
                          </div>
                        </p>
                        <hr />
                      </div>
                    );
                  } else return null;
                })}
              </Card>
            );
          })}
        </Card>
      </MainDiv>
    </Layout>
  );
};

export default Inspection;
