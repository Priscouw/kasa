import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import { aProposList } from "../../data/aProposList";

import imgBannerApropos from "../../assets/img/bannerAboutPage.png";

function AproposElement() {
  return (
    <>
      {aProposList.map((topbar) => (
        <Topbar
          key={topbar.title}
          topbarTitle={topbar.title}
          topbarContent={topbar.content}
        />
      ))}
    </>
  );
}

const Apropos = () => {
  return (
    <div>
      <Header />
      <Banner imageUrl={imgBannerApropos} title="" />
      <div className="topbarAproposContainer">
        <AproposElement />
      </div>

      <Footer />
    </div>
  );
};

export default Apropos;
