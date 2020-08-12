import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/layout";
import { MainDiv } from "../components/MyStyledComonents";
import { Card, HTMLTable } from "@blueprintjs/core";
import axios from "axios";
import { useCookies } from "react-cookie";
import Context from "../store/context";

// URI Encode data
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Inspections = () => {
  const [cookies] = useCookies(["housekeepr"]);

  const [inspectionPageState, setInspectionPageState] = useState({
    inspections: [],
  });

  useEffect(() => {
    axios
      .post("http://localhost:3000/inspections/get-inspections", encode({ token: cookies.housekeepr }))
      .then((response) => {
        console.log(response.data);
        setInspectionPageState({ inspections: response.data.result });
      });
  }, []);

  return (
    <Layout>
      <MainDiv>
        <Card>
          <h1>Inspections</h1>
          <hr />

          <HTMLTable style={{ width: "100%" }} bordered>
            <tr>
              <th>Inspection ID</th>
              <th>Inspected By</th>
              <th>Conducted On</th>
              <th>Score</th>
            </tr>
            {!inspectionPageState.inspections.length ? <h1>No Inspections Yet</h1> : null}
            {inspectionPageState.inspections.map((element, index) => (
              <tr>
                <td>{inspectionPageState.inspections[index].inspection_id}</td>
                <td>{inspectionPageState.inspections[index].first_name}</td>
                <td>{inspectionPageState.inspections[index].date}</td>
                <td>null</td>
              </tr>
            ))}
          </HTMLTable>
        </Card>
      </MainDiv>
    </Layout>
  );
};

export default Inspections;
