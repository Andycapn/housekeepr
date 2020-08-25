import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const PartOne = (props) => {
  if (props.currentStep !== 1) return null;
  const currentDate = new Date();
  const date = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
  return (
    <>
      <FormGroup>
        <FormLabel>Inspected By</FormLabel>
        <FormControl type="input" value={props.state.first_name} disabled />
      </FormGroup>
      <FormGroup>
        <FormLabel>Date</FormLabel>
        <FormControl type="text" value={date} disabled />
      </FormGroup>
      <FormGroup>
        <FormLabel>Room</FormLabel>
        <FormControl type="select" />
      </FormGroup>
    </>
  );
};

export default PartOne;
