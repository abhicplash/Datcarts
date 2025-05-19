import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
