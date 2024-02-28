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
import RegisterPage from "views/examples/RegisterPage.js";
import Histoire from "views/examples/Histoire.js";
import PageNotFound from "views/examples/PageNotFound.js";

import Departement from "views/examples/Departement";
import DepInfo from "views/examples/DepInfo";
import DepMath from "views/examples/DepMath";
import DepTech from "views/examples/DepTech";
import Formationdepinfo from "views/examples/Formationdepinfo";
import Formationdepmath from "views/examples/Formationdepmath";
import Foyers from "views/examples/Foyers";
import Resto from "views/examples/Resto";
import ActualitePage from "views/examples/ActualitePage";
import Formationdeptech from "views/examples/Formationdeptech";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));
const loading = <div>loading ...</div>;
const Etudiant = Loadable({
  loader: () => import(/* webpackChunkName: "etudiant" */ "modules/etudiant"),
  loading: () => loading,
});
const Professeur = Loadable({
  loader: () => import(/* webpackChunkName: "etudiant" */ "modules/professeur"),
  loading: () => loading,
});

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/index" element={<Index />} />

      <Route path="/Histoire" element={<Histoire />} />
      <Route path="/Departement" element={<Departement />} />
      <Route path="/DepInfo" element={<DepInfo />} />
      <Route path="/DepMath" element={<DepMath />} />
      <Route path="/DepTech" element={<DepTech />} />
      <Route path="/Formationdepinfo" element={<Formationdepinfo />} />
      <Route path="/Formationdepmath" element={<Formationdepmath />} />
      <Route path="/Formationdeptech" element={<Formationdeptech />} />

      <Route path="/Foyers" element={<Foyers />} />
      <Route path="/Resto" element={<Resto />} />
      <Route path="/actualitie/:actualitieId" element={<ActualitePage />} />

      <Route path="/etudiant/*" element={<Etudiant />} />
      <Route path="/professeur/*" element={<Professeur />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
