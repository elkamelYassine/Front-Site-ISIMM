import React from "react";
import { Container, Row, Col } from "reactstrap";
import imageSource from "assets/img/user.png";

const EtudiantMiniProfile = () => {
  const NameEtudiant = "Yassine EL Kamel";
  const Niveau = "ING INFO 1";
  const role = "Professuer";
  return (
    <div className="main">
      <Container>
        <Row>
          <Col className="mx-auto" lg="2" md="4" xs="4">
            <img
              alt="..."
              className="img-circle img-no-padding img-responsive"
              src={imageSource}
            />
          </Col>

          <Col lg="" md="4" xs="5">
            <h3>{NameEtudiant}</h3>
            <br />
            <h5>{Niveau}</h5>
            <h6 className="description">{role}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EtudiantMiniProfile;
