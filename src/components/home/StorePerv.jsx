import React from "react";
import { Link } from "react-router-dom";
export const currentYear = new Date().getFullYear();
const StorePerv = () => {
  return (
    <section class="live container flex">
      <h1 class="band-name section-font-size">LIVE DATES</h1>
      <h2 class="band-name">No dates for {currentYear}</h2>
      <Link to={"/band-app/live"} className="live-tour-btn">View all live dates</Link>
    </section>
  );
};

export default StorePerv;
