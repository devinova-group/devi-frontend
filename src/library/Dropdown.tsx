import React, { useState, useRef, useEffect } from "react";
import { Box, Button } from "theme-ui";
import Label from "./Label";
import NavLink from "./NavLink";
import arrow from "../assets/svg/arrow.svg";
import arrowDown from "../assets/svg/arrowDown.svg";
import { Image } from "theme-ui";
import { keyframes } from "@emotion/react";

export interface DropDownProps {
  children?: React.ReactNode;
}

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

const Dropdown: React.FC<DropDownProps> = ({ children }: DropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Image
          src={arrow}
          sx={{ marginLeft: "10px", display: open ? "none" : "flex" }}
          onClick={(e) => setOpen(!open)}
        />
        <Image
          src={arrowDown}
          sx={{ marginLeft: "10px", display: open ? "flex" : "none" }}
          onClick={(e) => setOpen(!open)}
        />
      </Box>
      {open && (
        <Box
          sx={{
            marginTop: "30px",
            marginLeft: "-80px",
            position: "absolute",
            width: "7rem",
            paddingBottom: "2rem",
            borderRadius: "10px",
            backgroundColor: "#F1F3F9",
            animation: `${fadeIn} 0.5s backwards`,
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default Dropdown;
