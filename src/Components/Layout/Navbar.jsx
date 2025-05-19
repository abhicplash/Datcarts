import React, { useState } from "react";
import "./Navbar.css";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo/logo.png";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <>
      <Topbar />
      <div className="Navbar-container">
        <div className="navImg">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <FaBars
          className="navIcon"
          onClick={() => {
            setView(!view);
          }}
        />
        {view ? (
          <div className="listmob">
            <Link to={"/"}>home</Link>
            <Link to={"/about"}>About us</Link>
            {/* <Link to={"/academics"}>academics</Link> */}
            {/* <Link to={"/blogs"}>blogs</Link> */}
            <Link to={"/contact"}>contact us</Link>
          </div>
        ) : null}
        <div className="listDesk">
          <Link to={"/"}>home</Link>
          <Link to={"/about"}>About us</Link>
          {/* <Link to={"/academics"}>academics</Link> */}
          {/* <Link to={"/blogs"}>blogs</Link> */}
          <Link to={"/contact"}>contact us</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
