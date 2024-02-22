import React from "react";
import { Route, Routes } from "react-router-dom";

import Emploi from "../user/Emploi";
import Settings from "../user/Settings";
import Profile from "../user/Profile";
import professeurNavbar from "./Navbar/professeurNavbar";

import useToken from "config/useToken";
import RegisterPage from "views/examples/RegisterPage";
import ProfilePageHeaderProf from "./Headers/ProfilePageHeaderProf";

const ProfessuerRoutes = () => {
  const { saveToken, isProfesseur } = useToken();

  if (!isProfesseur()) return <RegisterPage saveToken={saveToken} />;

  return (
    <Routes>
      <Route
        index
        element={
          <Profile
            NavBar={professeurNavbar}
            ProfilePageHeader={ProfilePageHeaderProf}
          />
        }
      />
      <Route path="emploi" element={<Emploi NavBar={professeurNavbar} />} />
      <Route path="settings" element={<Settings NavBar={professeurNavbar} />} />
    </Routes>
  );
};
export default ProfessuerRoutes;
