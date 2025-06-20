import React from "react";
import "./TeamCard.css";

const TeamCard = ({ image, name, post, desc }) => {
  return (
    <div className="teamCardWrapper">
      <img src={image} alt="" className="memberImg" />
      <div className="memberDetails">
        <span className="memberName">{name}</span>
        <br />
        <span className="memberDesc">{desc}</span>
      </div>
    </div>
  );
};

export default TeamCard;
