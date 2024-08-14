import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logements }) => {
  return (
    <>
      {logements.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id}>
          <article className="card">
            <img
              className="card-img"
              src={logement.cover}
              alt={logement.title}
            />
            <p className="card-text">{logement.title}</p>
          </article>
        </Link>
      ))}
    </>
  );
};

export default Card;
