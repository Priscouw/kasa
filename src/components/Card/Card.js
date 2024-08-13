import React from "react";

const Card = ({ cardCover, locationTitle }) => {
  return (
    <a href=".">
      <article className="card">
        <img className="card-img" src={cardCover} alt={locationTitle} />
        <p className="card-text">{locationTitle}</p>
      </article>
    </a>
  );
};

export default Card;
