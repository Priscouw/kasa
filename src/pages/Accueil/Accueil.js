import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
// import Card from "../../components/Card/Card";

import imgBannerAccueil from "../../assets/img/bannerHomePage.png";

const Accueil = () => {
  return (
    <div>
      <Header />
      <Banner
        imageUrl={imgBannerAccueil}
        title="Chez vous, partout et ailleurs"
      />
      <div className="cardContainer"></div>
      <Footer />
    </div>
  );
};

export default Accueil;
