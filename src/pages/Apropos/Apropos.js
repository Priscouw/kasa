import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

import imgBannerApropos from "../../assets/img/bannerAboutPage.png";

const Apropos = () => {
  return (
    <div>
      <Header />
      <Banner imageUrl={imgBannerApropos} title="" />
      <div className="topbarContainer">
        <Topbar
          topbarTitle="Fiabilité"
          topbarContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Topbar
          topbarTitle="Respect"
          topbarContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Topbar
          topbarTitle="Service"
          topbarContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Topbar
          topbarTitle="Sécurité"
          topbarContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>

      <Footer />
    </div>
  );
};

export default Apropos;
