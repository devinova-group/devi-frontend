import { keyframes } from "@emotion/react";
import React, { ReactNode, useRef, useState } from "react";
import {
  Flex,
  Label as LabelThemeUi,
  MenuButton,
  Image,
  Select,
} from "theme-ui";
import NavLink from "./NavLink";
import Hamburger from "../assets/svg/menu.svg";
import CloseIcon from "../assets/svg/x-close.svg";
import Logo from "../assets/svg/logo.png";
import switchLight from "../assets/svg/switch.svg";
import mobileLogo from "../assets/svg/mobileLogo.svg";
import ReactDOM from "react-dom";
import Dropdown from "./Dropdown";
import Box from "./Box";

export interface NavBarProps {
  children?: React.ReactNode;
}

const slideIn = keyframes({
  "0%": { transform: "scaleX(0)" },
  "100%": { transform: "scaleX(1)" },
});

const Navbar: React.FC<NavBarProps> = ({ children }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Box sx={{ variant: "boxes.nav" }}>{children}</Box>
      {/* <Box sx={{}} id="head">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // position: "fixed",
            width: "100%",
            height: "7rem",
            gap: "30px",
            float: "right",
            backgroundColor: "#F1F3F9",
            "@media screen and (max-width: 40em)": {
              display: "none",
            },
          }}
        >
          <Image
            src={Logo}
            sx={{ height: "auto", width: "10rem", marginRight: "50%" }}
          />
          <NavLink variant="menu">
            New Nova
            <Dropdown>
              <NavLink variant="subHead">New Nova</NavLink>
              <NavLink variant="subHead">Consulting</NavLink>
            </Dropdown>
          </NavLink>
          <NavLink variant="menu">Career</NavLink>
          <NavLink variant="menu">Services</NavLink>
          <NavLink variant="menu">About</NavLink>
          <NavLink variant="menu">Contact</NavLink>
        </Box>
        <Box
          sx={{
            display: menuOpen ? "none" : "flex",
            width: "100%",
            height: "5rem",
            backgroundColor: "#F1F3F9",
            "@media screen and (min-width: 40em)": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Image
              src={mobileLogo}
              sx={{
                marginLeft: "20px",
                float: "left",
              }}
            />
            <Box sx={{ float: "right" }}>
              <Image src={switchLight} />
              <Image
                src={Hamburger}
                sx={{
                  height: "30px",
                  cursor: "pointer",
                  marginRight: "10px",
                  marginLeft: "20px",
                  "@media screen and (min-width: 40em)": {
                    display: "none",
                  },
                }}
                onClick={() => setMenuOpen(true)}
              />
            </Box>
          </Box>
        </Box>
        {menuOpen ? (
          <Box
            sx={{
              width: "100%",
              height: "100rem",
              zIndex: "100",
              justifyContent: "center",
              position: "fixed",
              backgroundColor: "#EDF0F7",
              animation: `${slideIn} 0.5s`,
              "@media screen and (min-width: 40em)": {
                display: "none",
              },
            }}
          >
            <Image
              src={mobileLogo}
              sx={{
                marginLeft: "20px",
                float: "left",
                marginTop: "5%",
              }}
            />
            <Box
              sx={{
                float: "right",
                marginRight: "5%",
                marginTop: "5%",
              }}
            >
              <Image src={switchLight} />
              <Image
                src={CloseIcon}
                sx={{
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => setMenuOpen(false)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10rem",
                gap: "20px",
              }}
            >
              <NavLink>New Nova</NavLink>
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderLeft: "1px solid black",
                    marginLeft: "2rem",
                    width: "100%",
                  }}
                >
                  <NavLink>New Nova</NavLink>
                  <NavLink>Consulting</NavLink>
                </Box>
              </Box>
              <NavLink>Career</NavLink>
              <NavLink>Services</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
            </Box>
          </Box>
        ) : null}
      </Box> */}
    </>
  );
};

export default Navbar;
