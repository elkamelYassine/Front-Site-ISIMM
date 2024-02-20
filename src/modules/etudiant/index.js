import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Emploi from "../user/Emploi";
import Settings from "../user/Settings";
import Profile from "../user/Profile";
import useToken from "config/useToken";
import RegisterPage from "views/examples/RegisterPage";
import EtudiantNavbar from "modules/etudiant/Navbars/EtudiantNavbar.js";

const EtudiantRoutes = () => {
  const { setToken, isEtudiant } = useToken();
  /*const [loggedIn, setLoggedIn] = useState(isEtudiant());
  React.useEffect(() => {
    if (!loggedIn && token) destroyToken();
  });
  if (!loggedIn) {
    return <RegisterPage setToken={setToken} />;
  }*/

   if (!isEtudiant()) return <RegisterPage setToken={setToken} />;

  return (
    <Routes>
      <Route index element={<Profile NavBar={EtudiantNavbar} />} />
      <Route path="emploi" element={<Emploi NavBar={EtudiantNavbar}/>} />
      <Route path="settings" element={<Settings NavBar={EtudiantNavbar} />} />
    </Routes>
  );
};
export default EtudiantRoutes;
