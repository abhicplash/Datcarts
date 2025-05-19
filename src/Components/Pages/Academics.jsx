import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import "./Academics.css";
import { allServicesList } from "../../Utils/allservices";
import HomeContact from "../Layout/HomeContact";

const Academics = () => {
  return (
    <Layout>
      <PageTop pageName={"Datcarts."} />
      <div className="Academics-container">
        <div className="main-head"> Datcarts. is the future face of the store !. </div>
        <div className="service-para">We offer a smart solution for a perfect experience in store</div>
        <div className="service-box">
          <div className="service-box-rowone">
            {allServicesList.map((list, index) => (
              <div className="services" key={index}>
                <img src={list.icon} alt={list.servicename} />
                <div className="serviceContentDetails">
                  <div className="service-one-head">{list.servicename}</div>
                  <div className="service-box-para">{list.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <HomeContact />
      </div>
    </Layout>
  );
};

export default Academics;
