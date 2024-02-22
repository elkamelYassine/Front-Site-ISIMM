import React from "react";
import { Route, Routes } from "react-router-dom";

import Emploi from "../user/Emploi";
import Settings from "../user/Settings";
import Profile from "../user/Profile";
import useToken from "config/useToken";
import RegisterPage from "views/examples/RegisterPage";
import EtudiantNavbar from "modules/etudiant/Navbars/EtudiantNavbar.js";
import ProfilePageHeaderEtud from "./Headers/ProfilePageHeaderEtud";

const EtudiantRoutes = () => {
  const { saveToken, isEtudiant } = useToken();

  if (!isEtudiant()) return <RegisterPage saveToken={saveToken} />;

  return (
    <Routes>
      <Route
        index
        element={
          <Profile
            NavBar={EtudiantNavbar}
            ProfilePageHeader={ProfilePageHeaderEtud}
          />
        }
      />
      <Route path="emploi" element={<Emploi NavBar={EtudiantNavbar} />} />
      <Route path="settings" element={<Settings NavBar={EtudiantNavbar} />} />
    </Routes>
  );
};
export default EtudiantRoutes;
