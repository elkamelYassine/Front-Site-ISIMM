import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


import useToken from "config/useToken";
import RegisterPage from "views/examples/RegisterPage";
import ConnectedNavbar from "modules/etudiant/Navbars/ConnectedNavbar.js";
import Profile from "modules/user/Profile";
import Emploi from "modules/user/Emploi";
import Settings from "modules/user/Settings";

const EtudiantRoutes = () => {
  /* const { setToken, isEtudiant } = useToken();*/
  /*const [loggedIn, setLoggedIn] = useState(isEtudiant());
  React.useEffect(() => {
    if (!loggedIn && token) destroyToken();
  });
  if (!loggedIn) {
    return <RegisterPage setToken={setToken} />;
  }*/

  //  if (!isEtudiant()) return <RegisterPage setToken={setToken} />;

  return (
    <Routes>
      <Route index element={<Profile NavBar={ConnectedNavbar} />} />
      <Route path="emploi" element={<Emploi NavBar={ConnectedNavbar}/>} />
      <Route path="settings" element={<Settings NavBar={ConnectedNavbar} />} />
    </Routes>
  );
};
export default EtudiantRoutes;
