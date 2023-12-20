import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Apropos from "assets/img/A-propos.jpg";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
const CardApropos = () => {
  const data =
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  return (
    <>
      <div className="section">
        <Container>
          <div className="title">
            <h2>
              <Row>About Isimm</Row>
            </h2>
          </div>
          <Link to={"/histoire"}>
            <Card>
              <CardImg
                top
                className="Meduim-Image"
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
