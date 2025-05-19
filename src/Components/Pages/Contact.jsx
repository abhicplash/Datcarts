import React, { useState } from "react";
import PageTop from "../Layout/PageTop";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = () => {
    const { name, number, email, subject, message } = formData;

    if (!name || !number || !email || !subject || !message) {
      alert("Please fill out all fields before sending the message.");
      return;
    }

    const phoneNumber = "+919544056839";
    const text = `Name: ${name}%0AContact Number: ${number}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      <PageTop
        pageName="Get In Touch With US"
      />
      <div className="contact-container">
        <div className="first-row">
          <div className="contact">
            {/* <div className="contactus">Contact Us</div> */}
            <div className="get">
              Drop us a line!
            </div>
            <p className="contactPara">
              Get in touch with us effortlessly through our Contact page!
              Whether you have questions, feedback, or need assistance, we’re
              here to help. Reach out to us via the form, email.{" "}
            </p>
          </div>

          <div className="card">
            <div className="bluecard">
              <GrLocation className="location" />
              <div className="our-location">Our Location</div>
              <div className="location-para">
                3/494G, Mettungal, Manakkapady, Ernakulam - 683520
              </div>
            </div>
            <div className="whitecard">
              <BsTelephone className="phone" />
              <div className="phonenumber">Phone Number</div>
              <div className="location-paraphone">
                +91 790 777 2742 <br />
                +91 9544 056 839
              </div>
            </div>
            <div className="bluecard">
              <MdOutlineEmail className="location" />
              <div className="our-location">Email Us</div>
              <div className="location-para">
                connectingdotstech@hotmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="second-row">
          <div className="message">
            <div className="iconWrapper">
              <MdOutlineEmail className="messageicon" />
            </div>
            <span>
              Reach out to us easily through the form! Share your inquiries,
              feedback, or requests, and we’ll get back to you promptly.
            </span>
          </div>
          <form>
            <div className="form-container">
              <div className="input-wrapper">
                <input
                  className="input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="FirstName"
                  type="text"
                />
                <input
                  className="input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="input-wrapper">
                <input
                  className="input"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  type="text"
                />
                <input
                  className="input"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Your Number"
                  type="tel"
                />
              </div>
              <textarea
                name="message"
                className="textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
              <button type="button" onClick={handleSendMessage}>
                Send your message
              </button>
            </div>
          </form>
        </div>

        {/* <div className="third-row">
          <h1 className="googlemap">
            Find Us On <br /> Google Maps
          </h1>
          <p>
            Find us conveniently with Google Maps embedded on our Contact page!
            View our exact location and explore the easiest route to reach us.
            We’re just a click away to guide you here.
          </p>
          <div className="mapwrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2840668337944!2d55.51462277449597!3d25.39530022364998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7005785939d%3A0x2a69a5c04d351e02!2sIAS%20-%20EICRA!5e0!3m2!1sen!2sae!4v1739484234806!5m2!1sen!2sae"
              className="Contactmap"
              title="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Contact;
