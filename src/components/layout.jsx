import React, { useContext } from "react";
import Header from "./Header";
import styled from "@emotion/styled";
import axios from "axios";
import Context from "../store/context";
import { useCookies } from "react-cookie";

const MainDiv = styled.main`
  margin-top: 50px;
  margin-left: 220px;
  position: relative;
`;

// URI Encode data
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const getUserData = async (token, state, setState) => {
  const userData = await axios.post("http://localhost:3000/auth/", encode({ token: token }));
  setState({ ...state, ...userData.data });
  console.log("hi");
};

// @ts-ignore
const Layout = ({ children }) => {
  const [cookies, serCookies] = useCookies(["housekeepr"]);
  const token = cookies.housekeepr;
  const { state, setState } = useContext(Context);

  if (!state.id) {
    getUserData(token, state, setState);
    return <div>loading...</div>;
  }

  return (
    <>
      <Header />
      <MainDiv>{children}</MainDiv>
    </>
  );
};
export default Layout;
