import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import AboutTeam from "../Layout/AboutTeam";
import HomeContact from "../Layout/HomeContact";
import { allServicesList } from "../../Utils/allservices";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <PageTop pageName={"Datcarts. is the future face of the store !."} />
      <div className="Academics-container">
        <div className="main-head">
          {" "}
          We offer a smart solution for a perfect experience in store
        </div>
        <div className="service-box">
          <div className="service-box-rowone">
            {allServicesList.map((list, index) => (
              <div className="services" key={index}>
                <img
                  src={list.icon}
                  alt={list.servicename}
                  className="ServiceImg"
                />
                <div className="serviceContentDetails">
                  <div className="service-one-head">{list.servicename}</div>
                  <div className="service-box-para">{list.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <AboutBanner /> */}
      <AboutTeam />
      <HomeContact />
    </Layout>
  );
};

export default About;
