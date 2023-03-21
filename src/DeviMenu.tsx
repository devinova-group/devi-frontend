import { keyframes } from "@emotion/react";
import React from "react";
import { Image } from "theme-ui";
import { Box, BoxProps } from "theme-ui";
import NavLink from "./library/NavLink";
import switchLight from "./assets/svg/switch.svg";
import Dropdown from "./library/Dropdown";
import Navbars from "./library/Navbar";
import Logo from "./assets/svg/logo.png";
import Sidebar from "./library/Sidebar";

const DeviMenu = (props: BoxProps) => {
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbars.Navbar>
        <Navbars.Brand>
          <Image src={Logo} variant="desktopLogo" />
        </Navbars.Brand>
        <Navbars.Nav>
          <Navbars.Link size="desktop">
            New Nova
            <Dropdown>
              <NavLink variant="subHead">New Nova</NavLink>
              <NavLink variant="subHead">Consulting</NavLink>
            </Dropdown>
          </Navbars.Link>
          <Navbars.Link size="desktop">Career</Navbars.Link>
          <Navbars.Link size="desktop">Services</Navbars.Link>
          <Navbars.Link size="desktop">About</Navbars.Link>
          <Navbars.Link size="desktop">Contact</Navbars.Link>
          <Image src={switchLight} variant="test" />
        </Navbars.Nav>
        <Sidebar>
          <Box variant="boxes.mobileLinks">
            <NavLink variant="mobileLinks">New Nova</NavLink>
            <Box variant="boxes.subLinks">
              <NavLink variant="mobileLinks">Test 1</NavLink>
              <NavLink variant="mobileLinks">Test 2</NavLink>
            </Box>
            <NavLink variant="mobileLinks">Career</NavLink>
            <NavLink variant="mobileLinks">Services</NavLink>
            <NavLink variant="mobileLinks">About</NavLink>
            <NavLink variant="mobileLinks">Contact</NavLink>
          </Box>
        </Sidebar>
      </Navbars.Navbar>
    </>
  );
};

export default DeviMenu;
