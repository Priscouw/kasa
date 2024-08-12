import React from "react";

const Topbar = ({ topbarTitle, topbarContent }) => {
  return (
    <div>
      <div className="topbar">
        <h2 className="topbar-title">{topbarTitle}</h2>
        <i className="fa-solid fa-angle-up"></i>
      </div>
      <div className="topbar-content">
        <p>{topbarContent}</p>
      </div>
    </div>
  );
};

export default Topbar;
