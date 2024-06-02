import { Container, Row, Col } from "reactstrap";
import imageSource from "assets/img/user.png";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const EtudiantMiniProfile = ({ token, fonction }) => {
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
    <div className="main">
      <Container>
        <Row>
          <Col className="mx-auto" lg="2" md="4" xs="4">
            <img
              alt="..."
              className="img-circle img-no-padding img-responsive"
              src={src}
            />
          </Col>

          <Col lg="" md="4" xs="5">
            <h3>{NameEtudiant}</h3>
            <br />
            <h5>{Niveau}</h5>
            <h6 className="description">{fonction}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
EtudiantMiniProfile.propTypes = {
  token: PropTypes.string,
  fonction: PropTypes.string,
};
export default EtudiantMiniProfile;
