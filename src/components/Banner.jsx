import React from "react";
import "../App.css";
import bannerImage from "../assets/europe.jpg";
import { NavLink } from "react-router-dom";
export const Banner = () => {
  return (
    <>
      <section>
        <div class="banner">
          <div class="album container">
            <div class="album-text">
              <h1 class="band-name">DISCO</h1>
              <h1 class="band-name">FIGHTER</h1>
              <a href="/band-app" class="album-btn">Buy/Listen</a>
            </div>
            <div class="album-image">
              <img src={bannerImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
