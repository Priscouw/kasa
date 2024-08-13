import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import data from "../../data/logements.json";
import imgBannerAccueil from "../../assets/img/bannerHomePage.png";

function Cardlogement() {
  return (
    <>
      {data.map((logement) => (
        <Card
          key={logement.id}
          locationTitle={logement.title}
          cardCover={logement.cover}
        />
      ))}
    </>
  );
}

const Accueil = () => {
  return (
    <div>
      <Header />
      <Banner
        imageUrl={imgBannerAccueil}
        title="Chez vous, partout et ailleurs"
      />
      <div className="cardContainer">
        <Cardlogement />
      </div>

      <Footer />
    </div>
  );
};

export default Accueil;
