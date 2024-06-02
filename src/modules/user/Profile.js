import React, { useEffect, useState } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

import SectionCards from "views/index-sections/SectionCards.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import imageSource from "assets/img/user.png";
import PropTypes from "prop-types";
function Profile({ NavBar, ProfilePageHeader, token, fonction }) {
  document.documentElement.classList.remove("nav-open");
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.body.classList.add("landing-page");

    const getLogin = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/account", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error fetching user data");
        }

        const jsonData = await response.json();
        setLogin(jsonData.login);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      getLogin();
    }

    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  }, [token]); // Add `token` as a dependency so the effect runs only when `token` changes

  useEffect(() => {
    const getEtudiant = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/etudiants/login/" + login,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching user data");
        }

        const jsonData = await response.json();
        setUser(jsonData); // Use `setUser` to store the user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const getProfesseur = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/professeurs/login/" + login,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching user data");
        }

        const jsonData = await response.json();
        setUser(jsonData); // Use `setUser` to store the user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (login) {
      if (fonction == "Etudiant") getEtudiant();
      // Uncomment this line if you need to fetch professor data as well
      else getProfesseur();
    }
  }, [login, token]); // Add `login` and `token` as dependencies so the effect runs only when `login` or `token` changes

  console.log(user);

  const NameEtudiant = user ? user.prenom + " " + user.nom : "Loading...";
  const src = user
    ? user.photoDeProfile
      ? `data:image/png;base64,${user.photoDeProfile}`
      : imageSource
    : imageSource;
  const Niveau = "ING INFO 1";

  return (
    <>
      <NavBar changeColor={true} />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="photo de profile"
                className="img-circle img-no-padding img-responsive"
                src={src}
              />
            </div>
            <div className="name">
              <h4 className="title">{NameEtudiant}</h4>
              <h5>{Niveau}</h5>
              <h6 className="description">{fonction}</h6>
            </div>
          </div>

          <SectionCards />
          <br />
        </Container>
      </div>
      <br />
      <br />

      <DemoFooter />
    </>
  );
}

Profile.propTypes = {
  NavBar: PropTypes.elementType.isRequired,
  ProfilePageHeader: PropTypes.elementType.isRequired,
  token: PropTypes.string.isRequired,
  fonction: PropTypes.string.isRequired,
};
export default Profile;
