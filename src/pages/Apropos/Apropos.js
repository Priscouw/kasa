import React from "react";

import Banner from "../../components/Banner/Banner";
import Topbar from "../../components/Topbar/Topbar";

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
      <Banner imageUrl={imgBannerApropos} title="" />
      <div className="topbarAproposContainer">
        <AproposElement />
      </div>
    </div>
  );
};

export default Apropos;
