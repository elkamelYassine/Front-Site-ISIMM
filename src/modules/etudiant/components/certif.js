import React from "react";
import { Badge, Button, Container } from "reactstrap";
import EtudiantNavbar from "../Navbars/EtudiantNavbar";
import EtudiantMiniProfile from "modules/user/EtudiantMiniProfile";
import { PropTypes } from "prop-types";
import DemoFooter from "components/Footers/DemoFooter";

function Certif({ typeCertif }) {
  return (
    <>
      <EtudiantNavbar changeColor={false} />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <div className="main">
        <Container>
          <EtudiantMiniProfile />
          <h1 className="title text-primary">{typeCertif} </h1>
          <br />

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Demende</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">CP4468</th>
                <th>11/06/2024</th>
                <td>
                  <Badge color="danger" className=" text-center" pill>
                    en attente
                  </Badge>
                </td>
              </tr>
              <tr>
                <th scope="row">CP4469</th>
                <th>12/06/2024</th>
                <td>
                  <Badge color="success" className=" text-center" pill>
                    reçus
                  </Badge>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <Button className="btn-round mr-1 btn-postion-right " color="primary">
            demmender une certificat
          </Button>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <DemoFooter />
    </>
  );
}
Certif.propTypes = {
  typeCertif: PropTypes.string.isRequired,
};
export default Certif;
