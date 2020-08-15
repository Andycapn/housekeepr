import React, { useContext, useEffect } from "react";
import Header from "./Header";
import styled from "@emotion/styled";
import axios from "axios";
import Context from "../store/context";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

const spinnerStyling = css`
  margin: 0 auto;
  position: absolute;
  top: 45%;
`;

// Custom container for children pages.
const MainDiv = styled.main`
  position: relative;
  margin-top: 50px;
  margin-left: 220px;
  min-width: 770px;
`;

// URI Encode data
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

//Manages App Layout and Global Storage.
const Layout = ({ children }) => {
  const [cookies, setCookies] = useCookies(["housekeepr"]);
  const token = cookies.housekeepr;
  const { state, setState } = useContext(Context);
  useEffect(() => {
    if (!state.id) {
      axios
        .post("http://localhost:3000/auth/", encode({ token: token }))
        .then((response) => {
          setState({ ...response.data });
        })
        .catch((error) => {
          return <Redirect to="login" />;
        });
    }
  }, [token]);
  if (!state.id) {
    return (
      <div style={{ textAlign: "center", display: "relative" }}>
        <ClipLoader css={spinnerStyling} color={"#41b7fc"} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <MainDiv>{children}</MainDiv>
    </>
  );
};
export default Layout;
