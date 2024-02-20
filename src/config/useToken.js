import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import RegisterPage from "views/examples/RegisterPage";

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
    const stringToken = userToken.id_token;
    // Store token along with expiration time
    if (token) destroyToken();
    Cookies.set("token", stringToken, {
      expires: 1, // Set expiration in hours (here, 1 hour)
      secure: true, // Ensure secure transmission over HTTPS
      httpOnly: true, // Prevent accessing cookie via JavaScript
    });
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
    Cookies.remove("token", { secure: true, httpOnly: true });
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

  return {
    setToken: saveToken,
    getToken,
    isValidToken,
    destroyToken,
    isEtudiant,
  };
};

export default useToken;
