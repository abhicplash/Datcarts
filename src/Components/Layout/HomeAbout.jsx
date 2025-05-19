import React from "react";
import "./HomeAbout.css";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  const aboutList = [
    {
      name: "Education",
      icon: <IoBookSharp />,
      details:
        "Our goal is to inspire, educate, and prepare students for success in their careers and life",
    },
    {
      name: "Arts",
      icon: <FaPaintBrush />,

      details:
        "empower students with the inspiration and opportunities to bring their artistic visions to life.",
    },
    {
      name: "sports",
      icon: <MdOutlineSportsSoccer />,
      details:
        "inspire, train, and guide athletes to reach their highest potential, both on and off the field",
    },
  ];
  return (
    <div className="HomeAbout-container">
      <div className="homeaboutWrapper">
        {aboutList.map((list) => (
          <div className="HomeAboutCards-container">
            <div className="iconwrapper">{list.icon}</div>
            <span className="head">{list.name}</span>
            <span className="para">{list.details}</span>
          </div>
        ))}
      </div>
      <Link to={"/about"}>
        <button>Explore more</button>
      </Link>
    </div>
  );
};

export default HomeAbout;
