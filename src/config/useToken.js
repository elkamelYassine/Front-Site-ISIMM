import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
const useToken = () => {
  const getToken = () => {
    const userToken = Cookies.get("token");
    console.log("getToken is called");
    console.log(userToken);

    if (userToken) return userToken;
    console.log("the token is null");
    return null;
  };

  const [token, setToken] = useState(getToken);
  useEffect(() => {
    setToken(getToken());
  }, []);

  const saveToken = (userToken) => {
    if (!userToken || !userToken.id_token) {
      console.error("Invalid user token");
      return;
    }

    const stringToken = userToken.id_token;
    console.log("saveToken is called");

    // Store token along with expiration time
    if (getToken()) destroyToken();

    Cookies.set("token", stringToken, {
      expires: 1, // Set expiration in hours (here, 1 hour)
      secure: true, // Ensure secure transmission over HTTPS
    });

    console.log("Token saved");
    setToken(stringToken);
  };

  const reloadToken = () => {
    setToken(Cookies.get("token"));
  };

  // Function to check if token is valid
  const isValidToken = () => {
    const token = getToken();
    return token !== null; // If token is not null, it's considered valid
  };

  const destroyToken = () => {
    // Clear token from cookies with secure and httpOnly flags
    console.log("destroy token is called");
    Cookies.remove("token", { secure: true });
    setToken(null); // Set token state to null
  };

  const isEtudiant = () => {
    // setToken(getToken());

    if (token) {
      // Assuming the role is stored in the token as 'role'
      const role = jwtDecode(token).auth;

      console.log(token);

      console.log(role);
      return role.includes("ROLE_ETUDIANT");

      /*if (role && Array.isArray(role)) {
        console.log(role.includes("ROLE_ETUDIANT"));
        return role.includes("ROLE_ETUDIANT");
      }*/
    }

    return false; // Return false if token is null or undefined
  };

  const isProfesseur = () => {
    // setToken(getToken());

    if (token) {
      // Assuming the role is stored in the token as 'role'
      const role = jwtDecode(token).auth;

      console.log(token);

      console.log(role);
      return role.includes("ROLE_PROFESSOR");

      /*if (role && Array.isArray(role)) {
        console.log(role.includes("ROLE_ETUDIANT"));
        return role.includes("ROLE_ETUDIANT");
      }*/
    }

    return false; // Return false if token is null or undefined
  };

  return {
    saveToken,
    getToken,
    isValidToken,
    destroyToken,
    isEtudiant,
    isProfesseur,
  };
};

export default useToken;
