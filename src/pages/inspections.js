import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { MainDiv, BodyText } from "../components/MyStyledComonents";
import { Card, HTMLTable } from "@blueprintjs/core";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

const spinnerStyling = css`
  margin: 25% auto;
  position: relative;
  top: 45%;
`;

// URI Encode data
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Inspections = () => {
  const [cookies] = useCookies(["housekeepr"]);

  const [inspectionPageState, setInspectionPageState] = useState({
    inspections: [cookies.housekeepr],
    loading: true,
  });

  useEffect(() => {
    if (inspectionPageState.loading) {
      axios
        .post("http://localhost:3000/inspections/get-inspections", encode({ token: cookies.housekeepr }))
        .then((response) => {
          console.log(response.data);
          setInspectionPageState({ inspections: response.data.result, loading: false });
        });
    }
  }, [cookies.housekeepr]);

  return (
    <Layout>
      {inspectionPageState.loading ? (
        <div
          style={{
            textAlign: "center",
            display: "flex",
          }}
        >
          <ClipLoader css={spinnerStyling} color={"#41b7fc"} />
          <BodyText>Loading Inspections</BodyText>
        </div>
      ) : (
        <MainDiv>
          <Card>
            <h1>Inspections</h1>
            <hr />
            <HTMLTable style={{ width: "100%" }} bordered>
              <thead>
                <tr>
                  <th>Inspection ID</th>
                  <th>Inspected By</th>
                  <th>Conducted On</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {!inspectionPageState.inspections ? (
                  <h3 style={{ textAlign: "center" }}>No Inspections Yet</h3>
                ) : (
                  inspectionPageState.inspections.map((element, index) => (
                    <tr key={index}>
                      <td>{inspectionPageState.inspections[index].inspection_id}</td>
                      <td>{inspectionPageState.inspections[index].first_name}</td>
                      <td>{inspectionPageState.inspections[index].date}</td>
                      <td>null</td>
                    </tr>
                  ))
                )}
              </tbody>
            </HTMLTable>
          </Card>
        </MainDiv>
      )}
    </Layout>
  );
};

export default Inspections;
