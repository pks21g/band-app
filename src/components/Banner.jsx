import React from "react";
import "../App.css";
import bannerImage from "../assets/europe.jpg";
export const Banner = () => {
  return (
    
      <section id="banner">
        <div className="banner">
          <div className="album container">
            <div className="album-text">
              <h1 className="band-name">DISCO</h1>
              <h1 className="band-name">FIGHTER</h1>
              <a href="/band-app" className="album-btn">Buy/Listen</a>
            </div>
            <div className="album-image">
              <img src={bannerImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    
  );
};
export default Banner;
