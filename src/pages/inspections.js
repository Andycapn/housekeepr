import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { MainDiv, BodyText } from "../components/MyStyledComonents";
import { Card, HTMLTable, Button, Popover, Menu, Callout } from "@blueprintjs/core";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import { useHistory } from "react-router";

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
  let history = useHistory();
  const [inspectionPageState, setInspectionPageState] = useState({
    inspections: [],
    loading: true,
    serverErrors: { display: false },
    serverMessage: { display: false },
  });

  useEffect(() => {
    if (inspectionPageState.loading) {
      axios
        .post("http://localhost:3000/inspections/get-inspections", encode({ token: cookies.housekeepr }))
        .then((response) => {
          console.log(response.data);
          setInspectionPageState({
            ...inspectionPageState,
            inspections: response.data.result,
            loading: false,
          });
        });
    }
  }, [cookies.housekeepr, inspectionPageState.loading, inspectionPageState.inspections]);

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
            <h1 className="bp3-heading" style={{ color: "#05B2DC" }}>
              Inspections
            </h1>
            <hr />
            {!inspectionPageState.inspections ? (
              <>
                <div style={{ textAlign: "center" }}>
                  <h2 className="bp3-heading mb-4">No Inspections Yet</h2>
                  <Button
                    target="_parent"
                    intent="primary"
                    icon="clipboard"
                    onClick={() => history.push("/newInspection")}
                  >
                    Conduct Your First Inspection
                  </Button>
                </div>
              </>
            ) : (
              <HTMLTable style={{ width: "100%" }} bordered>
                <thead>
                  <tr>
                    <th>Inspected By</th>
                    <th>Conducted On</th>
                    <th>Room Name</th>
                  </tr>
                </thead>
                <tbody>
                  {inspectionPageState.inspections
                    .map((element, index) => (
                      <tr key={index}>
                        <td>
                          {`${inspectionPageState.inspections[index].first_name}
                        ${inspectionPageState.inspections[index].last_name}`}
                        </td>
                        <td>{inspectionPageState.inspections[index].date}</td>
                        <td>{inspectionPageState.inspections[index].room_name}</td>
                        <td>
                          <Button
                            onClick={() => {
                              history.push(`/inspection/${inspectionPageState.inspections[index].inspection_id}`);
                            }}
                            minimal
                            intent="primary"
                            fill
                            icon="document-open"
                          >
                            View Inspection
                          </Button>
                        </td>
                        <td>
                          <Popover fill>
                            <Button intent="danger" minimal icon="cross" fill>
                              Delete
                            </Button>
                            <Menu>
                              <p className="bp3-menu-header">
                                Are you sure you want to delete this inspection? This action is irreversible.
                              </p>
                              <Menu.Divider />
                              <Menu.Item intent="primary" text="Cancel" />
                              <Menu.Item
                                intent="Danger"
                                text={"Yes"}
                                onClick={(e) => {
                                  const id = inspectionPageState.inspections[index].inspection_id;
                                  console.log(id);
                                  axios
                                    .delete("http://localhost:3000/inspections/deleteInspection", {
                                      headers: {
                                        authorization: cookies.housekeepr,
                                        inspection_id: id,
                                      },
                                    })
                                    .then((response) => {
                                      console.log(response.data);
                                      setInspectionPageState({
                                        ...inspectionPageState,
                                        serverMessage: { display: true, ...response.data },
                                      });
                                      setTimeout(() => {
                                        setInspectionPageState({
                                          ...inspectionPageState,
                                          serverMessage: { display: false },
                                        });
                                      }, 2000);
                                      if (response.status === 200) {
                                        inspectionPageState.inspections.splice(index, 1);
                                      }
                                    })
                                    .catch((error) => {
                                      setInspectionPageState({
                                        ...inspectionPageState,
                                        serverErrors: { display: true, ...error.response.data },
                                      });
                                      setTimeout(
                                        () =>
                                          setInspectionPageState({
                                            ...inspectionPageState,
                                            serverErrors: { display: false },
                                          }),
                                        4000
                                      );
                                    });
                                }}
                              />
                            </Menu>
                          </Popover>
                        </td>
                      </tr>
                    ))
                    .reverse()}
                </tbody>
              </HTMLTable>
            )}
          </Card>
          {inspectionPageState.serverErrors.display ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Callout intent="danger" style={{ position: "fixed", top: "5px", zIndex: 10, width: "400px" }}>
                {inspectionPageState.serverErrors.errorMsg}
              </Callout>
            </div>
          ) : null}
          {inspectionPageState.serverMessage.display ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Callout intent="success" style={{ position: "fixed", top: "5px", zIndex: 10, width: "400px" }}>
                {inspectionPageState.serverMessage.message}
              </Callout>
            </div>
          ) : null}
        </MainDiv>
      )}
    </Layout>
  );
};

export default Inspections;
