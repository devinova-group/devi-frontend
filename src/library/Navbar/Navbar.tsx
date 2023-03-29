import React from "react";
import { useState } from "react";
import { useColorMode } from "theme-ui";
/* Library */
import Box from "../Box";
import Flex from "../Flex";
import Link from "../Link";

/* SVG */
import Hamburger from "../../assets/svg/darkMode/Hamburger.svg";
import Close from "../../assets/svg/darkMode/x-close.svg";
import DarkMode from "../../assets/svg/darkMode/DarkMode.svg";
import LightMode from "../../assets/svg/darkMode/LightMode.svg";

export interface NavbarProps {
  children: React.ReactNode;
}
export interface BrandProps {
  href: string;
  mobileLogo: string;
  logo: string;
}
export interface CollapseProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "7rem",
        gap: "30px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "services.background",
      }}
    >
      {children}
    </Flex>
  );
};

const Brand = ({ href, children }: any) => {
  return (
    <Link
      href={href}
      sx={{
        display: ["flex", "flex"],
        float: "left",
        alignItems: "center",
        height: "100%",
        marginLeft: "30px",
        "svg:nth-of-type(1)": {
          display: ["flex", "none"],
        },
        "svg:nth-of-type(2)": {
          display: ["none", "flex"],
        },
        svg: {
          fill: "text.color",
          "> path": {
            fill: "text.color",
          },
        },
      }}
    >
      {children}
    </Link>
  );
};

const Collapse = ({ children }: CollapseProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      <Box
        sx={{
          display: "contents",
          marginTop: "2.5rem",
          "@media screen and (max-width: 40em)": {
            display: "none",
          },
        }}
      >
        {children}
      </Box>
      <Flex
        sx={{
          display: "flex",
          alignItems: "center",
          height: "30px",
          cursor: "pointer",
          marginRight: "20px",
          "@media screen and (min-width: 40em)": {
            display: "none",
          },
        }}
      >
        <Box>
          {colorMode === "light" ? (
            <DarkMode
              onClick={() =>
                setColorMode(colorMode === "light" ? "dark" : "light")
              }
            />
          ) : (
            <LightMode
              onClick={() =>
                setColorMode(colorMode === "light" ? "dark" : "light")
              }
            />
          )}
        </Box>
        <Box
          sx={{
            height: "30px",
            marginLeft: "20px",
            cursor: "pointer",
            svg: {
              ":nth-of-type(1)": {
                fill: "text.color",
              },
            },
            "@media screen and (min-width: 40em)": {
              display: "none",
            },
          }}
        >
          {!menuOpen ? (
            <Hamburger onClick={() => setMenuOpen(true)} />
          ) : (
            <Close onClick={() => setMenuOpen(false)} />
          )}
        </Box>
        {menuOpen && (
          <Flex
            sx={{
              position: "fixed",
              top: "110px",
              right: 0,
              flexDirection: "column",
              width: "100%",
              height: "100vh",
              gap: "30px",
              background: "services.background",
              alignText: "left",
            }}
          >
            {children}
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Object.assign(Navbar, { Brand, Collapse });
