import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Histoire from "views/examples/Histoire.js";
import PageNotFound from "views/examples/PageNotFound.js";
import Emploi from "views/ConnectedPages/Emploi";
import Settings from "views/ConnectedPages/Settings";

import Departement from "views/examples/Departement";
import DepInfo from "views/examples/DepInfo";
import DepMath from "views/examples/DepMath";
import DepTech from "views/examples/DepTech";



import Login from 'app/modules/login/login';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import EntitiesRoutes from 'app/entities/routes';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import PageNotFound from 'app/shared/error/page-not-found';

import { AUTHORITIES } from 'app/config/constants';

const loading = <div>loading ...</div>;

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => loading,
});


const User = Loadable({
    loader: () => import(/* webpackChunkName: "account" */ 'app/modules/user'),
    loading: () => loading,
  });


const Etudiant = Loadable({
    loader: () => import(/* webpackChunkName: "account" */ 'modules/etudiant'),
    loading: () => loading,
  });
  


  const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => loading,
});


const AppRoutes = () => {
  return (
    <div className="view-routes">
      <ErrorBoundaryRoutes>
      <Route
            path="*"
            element={
                <User />
            }
          />
        
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="etudiant">
          <Route
            path="*"
            element={
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.ETUDIANT]}>
                <Etudiant />
              </PrivateRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="activate" element={<Activate />} />
          <Route path="reset">
            <Route path="request" element={<PasswordResetInit />} />
            <Route path="finish" element={<PasswordResetFinish />} />
          </Route>
        </Route>
        <Route
          path="admin/*"
          element={
            <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}>
              <EntitiesRoutes />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default AppRoutes;
