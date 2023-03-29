import React from "react";
/* Library */
import Navbar from "./library/Navbar/Navbar";
import Nav from "./library/Navbar/Nav";
import NavDropDown from "./library/Navbar/NavDropDown";
import Box from "./library/Box";
/* SVG */
import LogoDesktop from "./assets/svg/darkMode/logoDesktop.svg";
import LogoMobile from "./assets/svg/darkMode/logoMobile.svg";

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href={"/"}>
          <LogoMobile />
          <LogoDesktop />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropDown title="DROPDOWN">
              <NavDropDown.Item href="/">Action</NavDropDown.Item>
              <NavDropDown.Item href="/">Another Action</NavDropDown.Item>
              <NavDropDown.Item href="/">Something</NavDropDown.Item>
              <NavDropDown.Divider />
              <NavDropDown.Item href="/">Seperated link</NavDropDown.Item>
            </NavDropDown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#home">Career</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Box></Box>
    </>
  );
};

export default Navigation;
