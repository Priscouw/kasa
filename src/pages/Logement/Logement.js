import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tagname from "../../components/Tagname/Tagname";
import Footer from "../../components/Footer/Footer";
import data from "../../data/logements.json";
// import Topbar from "../../components/Topbar/Topbar";

const findLogementID = (id) => {
  return data.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementID(id);

  return (
    <div>
      <Header />
      <Carrousel carrouselImg={logement.pictures} />
      <div className="logement_infos_container">
        <div className="logement_infos">
          <h1 className="logement_infos-title">{logement.title}</h1>
          <p className="logement_infos-location">{logement.location}</p>
          <Tagname tagnames={logement.tags} />
        </div>
        <div className="host_information">
          <p className="host_information-name">{logement.host.name}</p>
          <img
            className="host_information-img"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
      </div>
      {/* <Topbar topbarTitle="Description" topbarContent={logement.description} />
      <Topbar
        topbarTitle="Équipements"
        topbarContent={
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        }
      /> */}

      <Footer />
    </div>
  );
};

export default Logement;
