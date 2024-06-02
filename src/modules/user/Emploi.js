import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import EtudiantMiniProfile from "./EtudiantMiniProfile";
// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import PropTypes from "prop-types";

function Emploi({ NavBar, token, fonction }) {
  document.documentElement.classList.remove("nav-open");
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
      <br /> <br />
      <br />
      <br /> <br />
      <div className="main">
        <Container>
          <EtudiantMiniProfile token={token} fonction={fonction} />
          <center>
            <h1 className="title text-primary">Emploi du temps </h1>
          </center>
          <br />
          <br />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Horaire</th>
                <th scope="col">8:30 - 10:00</th>
                <th scope="col">10:15 - 11:45</th>

                <th scope="col">13:00 - 14:30</th>
                <th scope="col">14:45 - 16:15</th>
                <th scope="col">16:30 - 18:00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Lundi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
              <tr>
                <th scope="row">Mardi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
              <tr>
                <th scope="row">Mercredi</th>
                <td>test</td>
                <td>test</td>

                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>

              <tr>
                <th scope="row">Jeudi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>

              <tr>
                <th scope="row">Vendredi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>

              <tr>
                <th scope="row">Samedi</th>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </tbody>
          </table>
          <br />
        </Container>
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
Emploi.propTypes = {
  NavBar: PropTypes.elementType.isRequired,
  token: PropTypes.string,
  fonction: PropTypes.string,
};
export default Emploi;
