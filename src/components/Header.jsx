import React, { useContext } from "react";
import { Alignment, Navbar, Button, AnchorButton, NavbarDivider } from "@blueprintjs/core";
import Context from "../store/context";
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";
import HouseKeeprLogo from "../Images/HouseKeepr-cropped.png";
import history from "../history";

const Header = () => {
  // @ts-ignore
  const { state } = useContext(Context);
  const [cookies, removeCookie] = useCookies(["housekeepr"]);

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
    border-right: 1px solid rgb(224, 224, 224);
  `;

  const SidebarButton = styled(AnchorButton)`
    margin: 5px 0;
    width: 150px;
    font-weight: bold;
  `;

  return (
    <div>
      <Navbar fixedToTop style={{ paddingLeft: "230px" }}>
        <Navbar.Group>
          <AnchorButton href="/dashboard" icon="home" minimal>
            Dashboard
          </AnchorButton>
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <AnchorButton href="/user" intent="primary" minimal rightIcon="user">
            {state.first_name}
          </AnchorButton>
          <NavbarDivider />
          <Button
            intent="danger"
            icon="log-out"
            minimal
            onClick={() => {
              removeCookie("housekeepr");
              return history.push("/login", history.state);
            }}
          />
        </Navbar.Group>
      </Navbar>
      <Sidebar>
        <img src={HouseKeeprLogo} alt="" style={{ height: "45px", marginTop: "10px" }} />
        <ul style={{ margin: "20px 0" }}>
          <SidebarButton intent="primary" icon="add" minimal>
            New Inspection
          </SidebarButton>
          <SidebarButton intent="primary" icon="history" minimal>
            View Reports
          </SidebarButton>
          <SidebarButton href="/register" intent="primary" icon="user" minimal>
            Add User
          </SidebarButton>
        </ul>
      </Sidebar>
    </div>
  );
};

export default Header;
