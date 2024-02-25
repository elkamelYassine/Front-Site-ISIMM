import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
const useToken = () => {
  const getToken = () => {
    const userToken = Cookies.get("token");

    if (userToken) return userToken;
    return null;
  };

  const [token, setToken] = useState(getToken);
  useEffect(() => {
    setToken(getToken());
  }, []);

  const saveToken = (userToken) => {
    if (!userToken || !userToken.id_token) {
      console.error("Invalid user token");
      return false;
    }

    const stringToken = userToken.id_token;
    // Store token along with expiration time
    if (getToken()) destroyToken();

    Cookies.set("token", stringToken, {
      expires: null, // Set expiration in hours (here, 1 hour)
      secure: true, // Ensure secure transmission over HTTPS
    });

    setToken(stringToken);
    return true;
  };

  const destroyToken = () => {
    // Clear token from cookies with secure and httpOnly flags
    console.log("destroy token is called");
    Cookies.remove("token", { secure: true });
    setToken(null); // Set token state to null
  };

  const isEtudiant = () => {
    if (token) {
      const role = jwtDecode(token).auth;
      return role.includes("ROLE_ETUDIANT");
    }

    return false; // Return false if token is null or undefined
  };

  const isProfesseur = () => {
    if (token) {
      const role = jwtDecode(token).auth;
      return role.includes("ROLE_PROFESSOR");
    }

    return false; // Return false if token is null or undefined
  };

  return {
    saveToken,
    getToken,
    token,
    destroyToken,
    isEtudiant,
    isProfesseur,
  };
};

export default useToken;
