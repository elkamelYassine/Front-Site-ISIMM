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
  const { saveToken, isProfesseur, token } = useToken();
  const fonction = "Professeur";
  if (!isProfesseur() && token)
    return (
      <div>
        <RegisterPage saveToken={saveToken} roleInvalide={true} />
      </div>
    );
  if (!isProfesseur() && !token)
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
            NavBar={professeurNavbar}
            ProfilePageHeader={ProfilePageHeaderProf}
            token={token}
            fonction={fonction}
          />
        }
      />
      <Route
        path="emploi"
        element={
          <Emploi NavBar={professeurNavbar} token={token} fonction={fonction} />
        }
      />
      <Route
        path="settings"
        element={
          <Settings
            NavBar={professeurNavbar}
            token={token}
            fonction={fonction}
          />
        }
      />
    </Routes>
  );
};
export default ProfessuerRoutes;
