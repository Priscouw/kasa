import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Erreur = () => {
  return (
    <div>
      <Header />
      <div className="error404">
        <h1 className="error404-title">404</h1>
        <p className="error404-text">
          Oups! La page que <br /> vous demandez n'existe pas.
        </p>
        <a href="/" className="error404-link">
          Retourner sur la page d’accueil
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Erreur;
