import React from "react";
import "./Topbar.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="Topbar-container">
      <div className="topbar-icons">
        <a href="https://www.facebook.com/p/Iaseicra-Academy-61555656762023">
          <BsFacebook />
        </a>
        <a href="https://www.youtube.com/channel/UCZrlcE6dnEZMjRE4bUqlU-Q">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/iaseicra.uae/">
          <BsInstagram />
        </a>
        <a href="https://iaseicra.com/#">
          <BsTwitterX />
        </a>
        <a href="https://iaseicra.com/#">
          <BsTelegram />
        </a>
        <a href="https://iaseicra.com/#">
          <BsLinkedin />
        </a>
      </div>
      <div className="topbar-contact">
        <div className="topbar-contact-details">
          <BsFillTelephoneFill />
          <h2>+91 790 777 2742</h2>
        </div>
        <div className="topbar-contact-details">
          <FaEnvelope />
          <h2>connectingdotstech@hotmail.com</h2>
        </div>
        <div className="topbar-contact-details">
          <BsFillTelephoneFill />
          <h2>+91 9544 056 839</h2>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
