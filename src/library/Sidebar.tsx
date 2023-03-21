import { keyframes } from "@emotion/react";
import React, { ReactNode, useRef, useState } from "react";
import { Image } from "theme-ui";
import { Box, BoxProps } from "theme-ui";
import Hamburger from "../assets/svg/menu.svg";
import closeIcon from "../assets/svg/x-close.svg";
import switchLight from "../assets/svg/switch.svg";
import mobileLogo from "../assets/svg/mobileLogo.svg";

export interface SidebarProps {
  children?: React.ReactNode;
}

const slideIn = keyframes({
  "0%": { right: "-400px" },
  "100%": { right: "0" },
});

const Sidebar: React.FC<SidebarProps> = ({ children }: SidebarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Image
        sx={{
          float: "left",
          cursor: "pointer",
          height: "30px",
          marginTop: "35px",
          marginLeft: "30px",
          "@media screen and (min-width: 40em)": {
            display: "none",
          },
        }}
        id="test"
        src={mobileLogo}
      />
      <Image
        src={Hamburger}
        sx={{
          float: "right",
          height: "30px",
          cursor: "pointer",
          marginTop: "35px",
          marginRight: "30px",
          "@media screen and (min-width: 40em)": {
            display: "none",
          },
        }}
        onClick={() => setMenuOpen(true)}
      />

      {menuOpen ? (
        <Box
          sx={{
            width: "100%",
            height: "100rem",
            display: "flex",
            position: "fixed",
            backgroundColor: "#EDF0F7",
            animation: `${slideIn} 0.7s forwards`,
            "@media screen and (min-width: 40em)": {
              display: "none",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Image
              sx={{
                float: "left",
                cursor: "pointer",
                height: "30px",
                marginTop: "35px",
                marginLeft: "30px",
              }}
              id="test"
              src={mobileLogo}
            />
            <Image
              sx={{
                float: "right",
                cursor: "pointer",
                height: "30px",
                marginTop: "35px",
                marginRight: "30px",
              }}
              src={closeIcon}
              onClick={() => setMenuOpen(false)}
            />
            <Image
              sx={{
                float: "right",
                cursor: "pointer",
                height: "30px",
                marginTop: "35px",
                marginRight: "30px",
              }}
              src={switchLight}
            />
            <Box>{children}</Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Sidebar;
