import React, { useContext, useState, useEffect } from "react";
import Layout from "../../components/layout";
import Context from "../../store/context";
import { MainDiv } from "../../components/MyStyledComonents";
import "./dashboard.css";
import { Card } from "@blueprintjs/core";
import axios from "axios";
import { useCookies } from "react-cookie";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

const spinnerStyling = css`
  margin: 25% auto;
  position: relative;
  top: 45%;
`;

const Dashboard = () => {
  const { state } = useContext(Context);
  const [cookies] = useCookies();
  const [dashboardState, setDashboardState] = useState({ loading: true, count: 0 });

  useEffect(() => {
    axios
      .get("http://localhost:3000/inspections/getCount", {
        headers: { authorization: cookies.housekeepr },
      })
      .then((response) => {
        setDashboardState({ loading: false, count: response.data.count });
      })
      .catch((e) => console.log(e));
  }, []);

  if (dashboardState.loading) {
    return (
      <Layout>
        <div style={{ textAlign: "center" }}>
          <ClipLoader css={spinnerStyling} color={"#41b7fc"} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <main className="dashboard-main">
          <section className="main-app-section">
            <MainDiv>
              <Card>
                <h1 className="bp3-heading" style={{ color: "#05B2DC", textAlign: "center" }}>
                  Hi {state.first_name}, You have conducted {dashboardState.count}{" "}
                  {dashboardState.count === 1 ? "inspection" : "inspections"} so far.
                </h1>
              </Card>
            </MainDiv>
          </section>
        </main>
      </>
    </Layout>
  );
};

export default Dashboard;
