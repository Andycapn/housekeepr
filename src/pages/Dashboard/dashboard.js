import React, { useContext } from "react";
import Layout from "../../components/layout";
import Context from "../../store/context";
import { MainDiv } from "../../components/MyStyledComonents";
import "./dashboard.css";
import { Card } from "@blueprintjs/core";

function Dashboard() {
  const { state } = useContext(Context);

  return (
    <Layout>
      <>
        <main className="dashboard-main">
          <section className="main-app-section">
            <MainDiv>
              <Card>
                <h1 className="bp3-heading" style={{ color: "#05B2DC" }}>
                  Hi {state.first_name}, You have conducted N inspections today
                </h1>
                <pre>{JSON.stringify(state)}</pre>
              </Card>
            </MainDiv>
          </section>
        </main>
      </>
    </Layout>
  );
}

export default Dashboard;
