import React, { useContext } from "react";
import Header from "./Header";
import styled from "@emotion/styled";
import axios from "axios";
import Context from "../store/context";
import { useCookies } from "react-cookie";
import history from "../history";

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

  if (!state.id) {
    axios
      .post("http://localhost:3000/auth/", encode({ token: token }))
      .then((response) => {
        setState({ ...response.data });
      })
      .catch((error) => {
        history.push("/login", history.state);
      });
    return <div style={{ display: "grid", place: "center" }}>Loading...</div>;
  }

  return (
    <>
      <Header />
      <MainDiv>{children}</MainDiv>
    </>
  );
};
export default Layout;
