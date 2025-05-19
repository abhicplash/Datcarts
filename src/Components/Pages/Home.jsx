import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
// import HomeAbout from "../Layout/HomeAbout";
import HomeContact from "../Layout/HomeContact";
import AboutTeam from "../Layout/AboutTeam";
import MissionAndVision from "../Layout/MissionAndVision ";
import Association from "../Layout/Association";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <MissionAndVision />
      <AboutTeam />
      <Association/>
      <HomeContact />
    </Layout>
  );
};

export default Home;
