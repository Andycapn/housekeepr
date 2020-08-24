import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const PartOne = (props) => {
  if (props.currentStep !== 1) return null;
  return (
    <>
      <FormGroup>
        <FormLabel>Inspected By</FormLabel>
        <FormControl type="input" value={props.state.first_name} disabled />
      </FormGroup>
      <FormGroup>
        <FormLabel>Date</FormLabel>
        <FormControl type="date" />
      </FormGroup>
      <FormGroup>
        <FormLabel>Room</FormLabel>
        <FormControl type="select" />
      </FormGroup>
    </>
  );
};

export default PartOne;
