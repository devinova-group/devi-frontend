import React from "react";
import Navigation from "../Navigation";
import Footer from "./footer";

function Layout({ children }: any) {
  return (
    <div className="layout">
      <Navigation />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
