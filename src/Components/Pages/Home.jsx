import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
// import HomeAbout from "../Layout/HomeAbout";
import HomeContact from "../Layout/HomeContact";
import AboutTeam from "../Layout/AboutTeam";
import MissionAndVision from "../Layout/MissionAndVision ";
import Association from "../Layout/Association";
import AutoCarousel from "../Layout/AutoCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <MissionAndVision />
      <AutoCarousel />
      <AboutTeam />
      <Association />
      <HomeContact />
    </Layout>
  );
};

export default Home;
