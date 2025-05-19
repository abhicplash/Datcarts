import React from "react";
import "./HomeContact.css";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className="HomeContact-container">
      <div className="homecontactWrapper">
        <div className="homecontactinfoWrapper">
          <span className="head">Drop us a line!<br /> </span>
          <span className="para">
            For questions or more information, contact us! Our team is ready to
            serve you.
          </span>
          <Link to={"/contact"}>
            <button>Know more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
