import React, { useState } from "react";

// reactstrap components
import { Button } from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import imageSource from "assets/img/user.png";
import PropTypes from "prop-types";
function Settings({ NavBar }) {
  document.documentElement.classList.remove("nav-open");

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [numtel, setNumtel] = useState("");
  const [email, setEmail] = useState("");

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
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
                  src={imageSource}
                  class="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Publier une autre photo...</h6>

                <input type="file" class="form-control" />
              </div>
            </div>

            <div class="col-md-9 personal-info">
              <h3>Information personnelle</h3>

              <form class="form-horizontal" role="form">
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
};
export default Settings;
