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
              <Link>home</Link>
              <Link>About us</Link>
              <Link>Academics</Link>

              <Link>Contact us</Link>
            </div>
          </div>{" "}
          <div className="FooterLinks">
            <h3>Contact Information</h3>
            <div className="subcontents">
              <a className="numberFooter" href="/">
                +91 790 777 2742
              </a>
              <a className="numberFooter" href="/">
                +91 9544 056 839
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="footer-lower">
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
    </div>
  );
};

export default Footer;
