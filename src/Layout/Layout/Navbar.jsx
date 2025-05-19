import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <img src={logo} alt="" className="Navlogo" />
      <FaBars className="navicon" />
      <ul className="listDesk">
        <Link to={"/"}>
          <li>home</li>
        </Link>
        <Link to={"/"}>
          <li>About</li>
        </Link>
        <Link to={"/"}>
          <li>Product</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
