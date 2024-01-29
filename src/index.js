import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Loadable from "react-loadable";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages

import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Histoire from "views/examples/Histoire.js";
import PageNotFound from "views/examples/PageNotFound.js";

import Departement from "views/examples/Departement";
import DepInfo from "views/examples/DepInfo";
import DepMath from "views/examples/DepMath";
import DepTech from "views/examples/DepTech";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));
const loading = <div>loading ...</div>;
const Etudiant = Loadable({
  loader: () => import(/* webpackChunkName: "etudiant" */ "modules/etudiant"),
  loading: () => loading,
});

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/login" element={<RegisterPage />} />
      <Route path="/Histoire" element={<Histoire />} />
      <Route path="/Departement" element={<Departement />} />
      <Route path="/DepInfo" element={<DepInfo />} />
      <Route path="/DepMath" element={<DepMath />} />
      <Route path="/DepTech" element={<DepTech />} />

      <Route path="/etudiant/*" element={<Etudiant />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
