import React from "react";
import Layout from "../components/layout";
import { MainDiv } from "../components/MyStyledComonents";
import { Card } from "@blueprintjs/core";

const NewInspection = () => {
  return (
    <Layout>
      <MainDiv>
        <Card>
          <h1>New Inspection</h1>
          <hr />
        </Card>
      </MainDiv>
    </Layout>
  );
};

export default NewInspection;
