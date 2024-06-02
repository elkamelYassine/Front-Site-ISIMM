import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Emploi from "../user/Emploi";
import Settings from "../user/Settings";
import Profile from "../user/Profile";
import useToken from "config/useToken";
import RegisterPage from "views/examples/RegisterPage";
import EtudiantNavbar from "modules/etudiant/Navbars/EtudiantNavbar.js";
import ProfilePageHeaderEtud from "./Headers/ProfilePageHeaderEtud";
import Certif from "./components/certif";

const EtudiantRoutes = () => {
  const { saveToken, isEtudiant, token } = useToken();
  const fonction = "Etudiant";
  if (!isEtudiant() && token)
    return (
      <div>
        <RegisterPage saveToken={saveToken} roleInvalide={true} />
      </div>
    );
  if (!isEtudiant() && !token)
    return (
      <div>
        <RegisterPage saveToken={saveToken} roleInvalide={false} />
      </div>
    );

  return (
    <Routes>
      <Route
        index
        element={
          <Profile
            NavBar={EtudiantNavbar}
            ProfilePageHeader={ProfilePageHeaderEtud}
            token={token}
            fonction={fonction}
          />
        }
      />
      <Route
        path="emploi"
        element={
          <Emploi NavBar={EtudiantNavbar} token={token} fonction={fonction} />
        }
      />
      <Route
        path="settings"
        element={
          <Settings NavBar={EtudiantNavbar} token={token} fonction={fonction} />
        }
      />
      <Route
        path="certificatpresence"
        element={<Certif typeCertif="Certificat de présence" token={token} />}
      />
      <Route
        path="certificatreussite"
        element={<Certif typeCertif="Certificat de réussite" token={token} />}
      />
    </Routes>
  );
};
export default EtudiantRoutes;
