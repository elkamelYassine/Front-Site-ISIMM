import React, { useEffect, useState } from "react";
// reactstrap components
import { Button } from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import imageSource from "assets/img/user.png";
import PropTypes from "prop-types";
function Settings({ NavBar, token, fonction }) {
  document.documentElement.classList.remove("nav-open");
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [numtel, setNumtel] = useState("");
  const [email, setEmail] = useState("");
  const [dateDeNaissance, setDateDeNaissance] = useState("");

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
  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setNom(user.nom);
      setPrenom(user.prenom);
      setNumtel(user.numTel);
      setDateDeNaissance(user.dateDeNaissance); // Assuming user.dateDeNaissance holds the date of birth
    }
  }, [user]);

  const [response, setResponse] = useState(null);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields here (implement your validation logic)

    // Construct payload for PUT request
    const payload = {
      id: user.id,
      nom: nom,
      prenom: prenom,
      numTel: numtel,
      email: email,
      dateDeNaissance: dateDeNaissance,
    };
    console.log(user);
    console.log(login);

    try {
      if (fonction == "Etudiant") {
        setResponse(
          await fetch(`http://localhost:8080/api/etudiants/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          })
        );
      } else {
        setResponse(
          await fetch(`http://localhost:8080/api/professeurs/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          })
        );
      }

      if (!response.ok) {
        throw new Error("Error updating user data");
      }

      // Handle success scenario (maybe show a success message)
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle error scenario (maybe show an error message)
    }
  };

  return (
    <>
      <NavBar changeColor={false} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <div>
        <div class="container bootstrap snippets bootdey">
          <h1 class="text-primary">Editer le profil</h1>
          <hr />
          <div class="row">
            <div class="col-md-3">
              <div class="text-center">
                <img
                  src={`data:image/png;base64,${
                    user ? user.photoDeProfile : imageSource
                  }`}
                  class="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Publier une autre photo...</h6>

                <input type="file" class="form-control" />
              </div>
            </div>

            <div class="col-md-9 personal-info">
              <h3>Information personnelle</h3>

              <form
                class="form-horizontal"
                role="form"
                onSubmit={handleFormSubmit}
              >
                <div class="form-group">
                  <label class="col-lg-3 control-label">Prénom:</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      value={prenom}
                      onChange={(input) => setPrenom(input.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Nom:</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      value={nom}
                      onChange={(input) => setNom(input.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">
                    Numéro de téléphone:
                  </label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      value={numtel}
                      onChange={(input) => setNumtel(input.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-lg-3 control-label">
                    Date de naissance:
                  </label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="date"
                      value={dateDeNaissance}
                      onChange={(input) =>
                        setDateDeNaissance(input.target.value)
                      }
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-lg-3 control-label">Email:</label>
                  <div class="col-lg-8">
                    <input
                      class="form-control"
                      type="text"
                      value={email}
                      onChange={(input) => setEmail(input.target.value)}
                    />
                  </div>
                </div>
                <br />
                <center>
                  {" "}
                  <Button
                    type="submit"
                    className="btn-round mr-1 col-lg-3 control-label"
                    color="primary"
                  >
                    Valider
                  </Button>
                </center>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DemoFooter />
    </>
  );
}
Settings.propTypes = {
  NavBar: PropTypes.elementType.isRequired,
  token: PropTypes.string.isRequired,
  fonction: PropTypes.string.isRequired,
};
export default Settings;
