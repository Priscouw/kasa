import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

import imgBannerApropos from "../../assets/img/bannerAboutPage.png";

const Apropos = () => {
  return (
    <div>
      <Header />
      <Banner imageUrl={imgBannerApropos} title="" />
      <Footer />
    </div>
  );
};

export default Apropos;
