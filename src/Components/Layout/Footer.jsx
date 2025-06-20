import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import logoImg from "../../Assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-Container">
      <div className="footer-top">
        <div className="footerImg">
          <img src={logoImg} alt="logoimage" className="logoImg" />
          {/* <img src={logoWrit} alt="logoWriting" className="logoWrit" /> */}
        </div>
        <div className="navInformationWrapper">
          <div className="FooterLinks">
            <h3>Navigation</h3>
            <div className="subcontents">
              <Link to={"/"}>home</Link>
              <Link to={"/about"}>About us</Link>
              <Link to={"/Products"}>Products</Link>
              <Link to={"/contact"}>Contact us</Link>
            </div>
          </div>
          <div className="FooterLinks">
            <h3 className="contactInfoFooter">Contact Information</h3>
            <div className="subcontents">
              <a className="numberFooter" href="/">
                +91 9544 056 839
              </a>
              <a className="numberFooter" href="/">
                +91 9562 465 095
              </a>
              <a className="numberFooter" href="/">
                connectingdotstech@hotmail.com
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="footer-lower">
        <a
          rel="noreferrer"
          href="https://www.facebook.com/p/Iaseicra-Academy-61555656762023"
        >
          <BsFacebook />
        </a>
        <a href="https://www.youtube.com/channel/UCZrlcE6dnEZMjRE4bUqlU-Q">
          <BsYoutube />
        </a>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/datcarts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a href="https://iaseicra.com/#">
          <BsTwitterX />
        </a>
        <a href="https://iaseicra.com/#">
          <BsTelegram />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/company/connecting-dots-tech-venture/"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
