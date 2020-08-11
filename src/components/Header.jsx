import React, { useContext } from "react";
import { Alignment, Navbar, Button, AnchorButton } from "@blueprintjs/core";
import Context from "../store/context";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";

const Header = () => {
  // @ts-ignore
  const { state } = useContext(Context);

  const Sidebar = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 220px;
    height: 100vh;
    border-right: 1px solid gray;
  `;

  const SidebarButton = styled(AnchorButton)`
    width: 150px;
  `;

  return (
    <div>
      <Navbar fixedToTop style={{ paddingLeft: "230px" }}>
        <Navbar.Group>
          <AnchorButton href="/dashboard" icon="home" minimal />
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <AnchorButton href="/user" intent="primary" minimal rightIcon="user">
            {state.first_name}
          </AnchorButton>
          <Button
            intent="danger"
            icon="log-out"
            minimal
            onClick={() => {
              document.cookie = "";
              console.log(document.cookie);
            }}
          />
        </Navbar.Group>
      </Navbar>
      <Sidebar>
        <ul style={{ margin: "20px 0" }}>
          <SidebarButton style={{ margin: "5px 0" }} intent="primary" icon="add" minimal>
            New Inspection
          </SidebarButton>
          <SidebarButton style={{ margin: "5px 0" }} intent="primary" icon="history" minimal>
            View Reports
          </SidebarButton>
        </ul>
      </Sidebar>
    </div>
  );
};

export default Header;
