import React from "react";
import bannerImage from "../../assets/europe.jpg";
export const Banner = () => {
  return (
    <div id="banner-sec">
      <div className="banner">
        <div className="album container">
          <div className="album-text">
            <h1 className="band-name">DISCO</h1>
            <h1 className="band-name">FIGHTER</h1>
            <a href="/band-app" className="album-btn">
              Buy/Listen
            </a>
          </div>
          <div className="album-image">
            <img src={bannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
