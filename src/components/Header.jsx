import React, { useContext } from "react";
import { Alignment, Navbar, Button, NavbarDivider, Icon, Popover, Menu, MenuItem } from "@blueprintjs/core";
import Context from "../store/context";
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";
import HouseKeeprLogo from "../Images/HouseKeepr-cropped.png";
import { NavLink, Link, useHistory } from "react-router-dom";

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
  align-items: center;
`;

const SidebarLink = styled(NavLink)`
  width: 100%;
  font-weight: bold;
  transition: 200ms ease-in;
  padding: 15px 0 15px 25px;
  color: #0683a2;
  &:hover {
    color: #0683a2;
    border-left: 5px solid #05b2dc;
    background-color: #d2d2d2;
    text-decoration: none;
  }
  &.active-style {
    border-left: 5px solid #05b2dc;
  }
`;

const Header = () => {
  // @ts-ignore
  const { state, setState } = useContext(Context);
  const [cookies, removeCookie] = useCookies(["housekeepr"]);
  let history = useHistory();

  return (
    <div>
      <Navbar fixedToTop style={{ paddingLeft: "230px" }}>
        <Navbar.Group>
          <Button
            href="/dashboard"
            icon="home"
            minimal
            style={{ transition: "125ms ease-in" }}
            intent="primary"
            onClick={() => {
              history.push("/dashboard");
            }}
            active={history.location.pathname === "/dashboard"}
          >
            Dashboard
          </Button>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Popover>
            <Button intent="primary" minimal rightIcon="user" style={{ transition: "125ms ease-in" }}>
              {state.first_name}
            </Button>
            <Menu>
              <MenuItem
                text="My Profile"
                icon="user"
                onClick={() => {
                  history.push("/user");
                }}
              />
              <Menu.Divider />
              <MenuItem
                text="Logout"
                icon="log-out"
                intent="danger"
                onClick={() => {
                  history.push("/login");
                  setState({
                    id: "",
                    first_name: "",
                    last_name: "",
                    sidebarOpen: false,
                  });
                  removeCookie("housekeepr");
                }}
                style={{ transition: "125ms ease-in" }}
              />
            </Menu>
          </Popover>
        </Navbar.Group>
      </Navbar>
      <Sidebar>
        <Link to="/dashboard">
          <img src={HouseKeeprLogo} alt="" style={{ height: "45px", margin: "7px 0 20px 0" }} />
        </Link>
        <SidebarLink to="/newInspection" intent="primary" icon="user" activeClassName={"active-style"}>
          <span style={{ marginRight: "5px" }}>
            <Icon icon="plus" />
          </span>
          New Inspection
        </SidebarLink>
        <SidebarLink to="/inspections" intent="primary" icon="user" activeClassName={"active-style"}>
          <span style={{ marginRight: "5px" }}>
            <Icon icon="clipboard" />
          </span>
          Inspections
        </SidebarLink>
        {state.privilege === "admin" ? (
          <SidebarLink to="/add-user" intent="primary" icon="user" activeClassName={"active-style"}>
            <span style={{ marginRight: "5px" }}>
              <Icon icon="user" />
            </span>
            Add User
          </SidebarLink>
        ) : null}
      </Sidebar>
    </div>
  );
};

export default Header;
