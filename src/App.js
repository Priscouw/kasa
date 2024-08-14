import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Apropos from "./pages/Apropos/Apropos";
import Logement from "./pages/Logement/Logement";
import Erreur from "./pages/Erreur/Erreur";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
