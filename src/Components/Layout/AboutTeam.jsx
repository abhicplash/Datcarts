import React from "react";
import "./AboutTeam.css";
// import OurTeam from "../../Utils/TeamList";
import { Link } from "react-router-dom";
import TeamCard from "../../Components/Layout/TeamCard";
import { ourTeam } from "../../Utils/TeamList";

const AboutTeam = () => {
  return (
    <div className="AboutTeamWrapper">
      <h2 className="ourteam">Our Team</h2>
      <div className="meetteam">Meet the minds behind the magic </div>
      {/* <span className="teamIntro">
        Meet the passionate team driving innovation and excellence behind of
        Datcart.
      </span> */}
      <div className="team-wrapper">
        {ourTeam.map((team, index) => (
          <TeamCard
            key={index}
            image={team.image}
            name={team.name}
            post={team.post}
            desc={team.desc}
          />
        ))}
      </div>
      {/* <img
        src="https://img1.wsimg.com/isteam/ip/30264a65-7711-4d2a-9420-85c0dcf496a1/team.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1240,cg:true"
        alt=""
      /> */}
    </div>
  );
};

export default AboutTeam;
