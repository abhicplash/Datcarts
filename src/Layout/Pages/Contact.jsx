import React from "react";
import "./Contact.css";
import Layout from "../Layout/Layout";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="ContactContainer">
        <div className="contactBanner"></div>
        <div className="contactWrapper">
          <div className="contactForm">
            <h2>Drop us a line!</h2>
            
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" placeholder="Message"></textarea>
            <button>Send Message</button>
          </div>
          <div className="ContactGetintouchWrapper">
            <h1>Get In Touch</h1>
            <div className="contactInfoWrppaer">
              <div className="contactIcon">
                <FaPhoneAlt />
              </div>
              <div className="contactinfo">
                <span className="contactInfoText">Call Us Now</span>
                <span className="contactNum">+919562465095</span>
              </div>
            </div>
            <div className="contactInfoWrppaer">
              <div className="contactIcon">
                <FaEnvelope />
              </div>
              <div className="contactinfo">
                <span className="contactInfoText">Call Us Now</span>
                <span className="contactNum">+919562465095</span>
              </div>
            </div>
            <div className="contactInfoWrppaer">
              <div className="contactIcon">
                <FaLinkedin />
              </div>
              <div className="contactinfo">
                <span className="contactInfoText">Call Us Now</span>
                <span className="contactNum">+919562465095</span>
              </div>
            </div>
            <div className="contactInfoWrppaer">
              <div className="contactIcon">
                <FaLinkedin />
              </div>
              <div className="contactinfo">
                <span className="contactInfoText">Call Us Now</span>
                <span className="contactNum">+919562465095</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
