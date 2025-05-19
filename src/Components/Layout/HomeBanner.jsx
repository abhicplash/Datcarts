import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <div className="bannerShadowWrapper">
        <div className="bannerDetails">
          <span className="iaseicra">
            Hassle Free <br /> Shopping <br /> Experience...
          </span>
          <span className="bannerpara">
            smart carts for a seamless shopping experience !
          </span>
          <button className="iasecrabtn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
