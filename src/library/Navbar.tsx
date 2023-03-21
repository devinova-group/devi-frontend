import React from "react";
import { Box } from "theme-ui";
import {
  BrandProps,
  LinkProps,
  MobileNavProps,
  NavbarProps,
  NavProps,
  SubNavProps,
} from "../interfaces/navbars";
import NavLink from "./NavLink";

const Navbar = ({ children }: NavbarProps) => (
  <Box
    sx={{
      width: "100%",
      height: "7rem",
      gap: "30px",
      float: "right",
      backgroundColor: "#F1F3F9",
    }}
  >
    {children}
  </Box>
);
const Nav = ({ children }: NavProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      float: "right",
      alignItems: "center",
      height: "100%",
      // position: "fixed",
      gap: "30px",
      marginRight: "30px",
      "@media screen and (max-width: 40em)": {
        display: "none",
      },
    }}
  >
    {children}
  </Box>
);
const MobileNav = ({ children }: MobileNavProps) => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      float: "left",
      marginTop: "5rem",
    }}
  >
    {children}
  </Box>
);
const SubNav = ({ children }: SubNavProps) => (
  <Box
    sx={{
      marginLeft: "30px",
      borderLeft: "2px solid black",
    }}
  >
    {children}
  </Box>
);

const Brand = ({ children }: BrandProps) => (
  <Box
    sx={{
      display: "flex",
      float: "left",
      alignItems: "center",
      height: "100%",
      marginLeft: "30px",
      "@media screen and (max-width: 40em)": {
        display: "none",
      },
    }}
  >
    {children}
  </Box>
);

const Link = ({ children, size }: LinkProps) => (
  <NavLink variant={`links.${size}`}>{children}</NavLink>
);

const Navbars = { Nav, Link, Brand, Navbar, MobileNav, SubNav };

export default Navbars;
