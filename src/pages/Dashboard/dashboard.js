import React, { useContext } from "react";
import Layout from "../../components/layout";
import Context from "../../store/context";
import { MainDiv } from "../../components/MyStyledComonents";
import "./dashboard.css";

function Dashboard() {
  const { state } = useContext(Context);

  return (
    <Layout>
      <>
        <main className="dashboard-main">
          <section className="main-app-section">
            <MainDiv>
              <h1>Hi {state.first_name}, You have conducted N inspections today</h1>
              <pre>{JSON.stringify(state)}</pre>
            </MainDiv>
          </section>
        </main>
      </>
    </Layout>
  );
}

export default Dashboard;
