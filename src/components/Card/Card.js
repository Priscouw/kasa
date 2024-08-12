import React from "react";

const Card = ({ cardImg }) => {
  return (
    <article className="card">
      <img className="card-img" src={cardImg} alt="" />
      <p className="card-text">
        Titre de la <br /> location
      </p>
    </article>
  );
};

export default Card;
