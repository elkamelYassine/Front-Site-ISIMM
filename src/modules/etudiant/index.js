import React from "react";
import { Route, Routes } from "react-router-dom";

import Emploi from "./components/Emploi";
import Settings from "./components/Settings";
import Profile from "./Profile";
const EtudiantRoutes = () => (
  <Routes>
    <Route index element={<Profile />} />
    <Route path="emploi" element={<Emploi />} />
    <Route path="settings" element={<Settings />} />
  </Routes>
);

export default EtudiantRoutes;
