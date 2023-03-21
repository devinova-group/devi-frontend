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
          <Navbars.MobileNav>
            <Navbars.Link size="mobile">New Nova</Navbars.Link>
            <Navbars.SubNav>
              <Navbars.Link size="mobile">Test 1</Navbars.Link>
              <Navbars.Link size="mobile">Test 2</Navbars.Link>
            </Navbars.SubNav>
            <Navbars.Link size="mobile">Career</Navbars.Link>
            <Navbars.Link size="mobile">Services</Navbars.Link>
            <Navbars.Link size="mobile">About</Navbars.Link>
            <Navbars.Link size="mobile">Contact</Navbars.Link>
          </Navbars.MobileNav>
        </Sidebar>
      </Navbars.Navbar>
    </>
  );
};

export default DeviMenu;
