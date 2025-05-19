import React from "react";
import "./Topbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="TopbarContainer">
      <div className="topbarDetailsleftwrapper">
        <div className="topbarDetailsContainer">
          <FaPhoneAlt />
          <span className="topbardata">+919562465095</span>
        </div>
        <div className="topbarDetailsContainer">
          <FaEnvelope />
          <span className="topbardata">connectingdotstech@hotmail.com</span>
        </div>
      </div>
      <div className="topbarSocialMedia">
        {/* <div className="topbarDetailsContainer"> */}
        <FaLinkedin />
        <FaInstagram />
        <FaLinkedin />
        <FaInstagram />
        {/* </div> */}
        {/* <div className="topbarDetailsContainer"> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Topbar;
