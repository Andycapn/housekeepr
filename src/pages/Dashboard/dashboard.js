import React, { useContext } from "react";
import Layout from "../../components/layout";
import Context from "../../store/context";
import { MainDiv } from "../../components/MyStyledComonents";
import "./dashboard.css";
import { Card } from "@blueprintjs/core";
import { Title } from "../../components/styledelements";

function Dashboard() {
  const { state } = useContext(Context);

  return (
    <Layout>
      <>
        <main className="dashboard-main">
          <section className="main-app-section">
            <MainDiv>
              <Card>
                <Title>Hi {state.first_name}, You have conducted N inspections today</Title>
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
