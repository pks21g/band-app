import React from "react";

const NoLive = () => {
  var nd = new Date();
  var currentYear = nd.getFullYear();
  return (
    <div>
      <h2 className="band-name">No dates for {currentYear}</h2>
    </div>
  );
};

export default NoLive;
