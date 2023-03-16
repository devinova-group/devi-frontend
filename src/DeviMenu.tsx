import { keyframes } from "@emotion/react";
import React, { ReactNode, useRef, useState } from "react";
import {
  Flex,
  Label as LabelThemeUi,
  MenuButton,
  Image,
  Select,
} from "theme-ui";
import { Box, BoxProps } from "theme-ui";
import NavLink from "./library/NavLink";
import Hamburger from "../assets/svg/menu.svg";
import CloseIcon from "../assets/svg/x-close.svg";
import switchLight from "./assets/svg/switch.svg";
import mobileLogo from "../assets/svg/mobileLogo.svg";
import ReactDOM from "react-dom";
import Dropdown from "./library/Dropdown";
import Navbar from "./library/Navbar";
import Logo from "./assets/svg/logo.png";
import Sidebar from "./library/Sidebar";

const slideIn = keyframes({
  "0%": { transform: "scaleX(0)" },
  "100%": { transform: "scaleX(1)" },
});

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
      <Navbar>
        <Box variant="boxes.alignLogo">
          <Image src={Logo} variant="desktopLogo" />
        </Box>
        <Box variant="boxes.desktopLinks">
          <NavLink variant="menu">
            New Nova
            <Dropdown>
              <NavLink variant="subHead">New Nova</NavLink>
              <NavLink variant="subHead">Consulting</NavLink>
            </Dropdown>
          </NavLink>
          <NavLink variant="menu">Career</NavLink>
          <NavLink variant="menu">Services</NavLink>
          <NavLink variant="menu" onClick={handleClickScroll}>
            About
          </NavLink>
          <NavLink variant="menu">Contact</NavLink>
          <Image src={switchLight} variant="test" />
        </Box>
        <Sidebar>
          <Box variant="boxes.mobileLinks">
            <NavLink variant="nav">New Nova</NavLink>
            <NavLink variant="nav">Career</NavLink>
            <NavLink variant="nav">Services</NavLink>
            <NavLink variant="nav">About</NavLink>
            <NavLink variant="nav">Contact</NavLink>
          </Box>
        </Sidebar>
      </Navbar>
    </>
  );
};

export default DeviMenu;
