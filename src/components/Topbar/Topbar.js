import React, { useState } from "react";
import arrowUp from "../../assets/icons/arrow-up.svg";

const Topbar = ({ topbarTitle, topbarContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topbar">
      <div className="topbar-header">
        <h2 className="topbar-header-title">{topbarTitle}</h2>
        <img
          src={arrowUp}
          alt="flèche"
          className={`angle-up ${isOpen ? "rotateAngle-up" : ""}`}
          onClick={handleArrowClick}
        />
      </div>
      <div className={`topbar-content ${isOpen ? "showTopbar-content" : ""}`}>
        {topbarContent}
      </div>
    </div>
  );
};

export default Topbar;
