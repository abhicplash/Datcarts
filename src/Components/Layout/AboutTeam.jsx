import React from "react";
import "./AboutTeam.css";
// import OurTeam from "../../Utils/TeamList";
import { Link } from "react-router-dom";
import TeamCard from "../../Components/Layout/TeamCard";
import { ourTeam } from "../../Utils/TeamList";

const AboutTeam = () => {
  return (
    <div className="AboutTeam-container">
      <div className="teamHead">
        <h1 className="ourteam">Our Team</h1>
        <span className="meetteam">Meet the minds behind the magic</span>
        <span className="teamIntro">
         Meet the passionate team driving innovation and excellence behind of Datcart.
        </span>
      </div>
      <div className="ourTeamWrapper">
        {ourTeam.map((member, index) => (
          <Link key={member.id}>
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              desc={member.desc}
              post={member.post}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
