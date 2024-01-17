import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Apropos from "assets/img/A-propos.jpg";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
const CardApropos = () => {
  const data =
    "L'Institut Supérieur d'Informatique et de Mathématiques de l’Université de Monastir (ISIMM) est créé par le décret n° 1623 du 09 juillet 2002, est un établissement d’enseignement supérieur scientifique, public.";
  return (
    <>
      <div className="section">
        <Container>
          <div className="title">
            <h2>
              <Row>A propos Isimm</Row>
            </h2>
          </div>
          <Link to={"/histoire"}>
            <Card>
              <CardImg
                top
                src={Apropos}
                alt="Apropos"
              ></CardImg>
              <CardBody>
                <CardTitle>A propos</CardTitle>
                <CardText>{data}</CardText>
              </CardBody>
            </Card>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default CardApropos;
