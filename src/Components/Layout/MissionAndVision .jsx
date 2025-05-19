import React from "react";
import "./MissionAndVision.css";
import { BsEyeFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router-dom";
import aboutimg from "../../Assets/feautres/1.PNG";

const MissionAndVision = () => {
  return (
    <div className="mission-vision-container">
      {/* <div className="about-img"></div> */}
      <img src={aboutimg} className="about-img" alt="" />
      <div className="right-side-details">
        <div className="about-heading">Hassle Free Shopping Experience...</div>
        {/* <span className="about-para">
          Smart carts for a seamless shopping experience !
        </span> */}
        <div className="mission-vision">
          <div className="vision-icon">
            <BsEyeFill className="vision" />
          </div>
          <p className="vision-para">
            Smart trolley technology that enhances convenience and improves the
            in-store experience
          </p>
        </div>
        <div className="mission-vision">
          <div className="mission-icon">
            <TbTargetArrow className="vision" />
          </div>
          <p className="vision-para">
            {" "}
            We aim to bridge the gap between physical and digital commerce,
            making shopping smarter and more efficient.
          </p>
        </div>
        <Link to={"/about"}>
          <button className="about-btn">Explore more</button>
        </Link>
      </div>
    </div>
  );
};

export default MissionAndVision;
