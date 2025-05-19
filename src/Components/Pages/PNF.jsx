import React from "react";
import "./PNF.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const PNF = () => {
  return (
    <Layout>
      <div className="pnf-container">
        <h1>Sorry something went </h1>
        <Link to={"/"}>
          <button>go back to home</button>
        </Link>
      </div>
    </Layout>
  );
};

export default PNF;
