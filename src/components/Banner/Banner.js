import React from "react";

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" className="banner-img" />
      <p className="banner-text"> {title} </p>
    </div>
  );
};

export default Banner;
