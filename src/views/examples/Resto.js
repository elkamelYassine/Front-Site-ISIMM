import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import restofatt from "assets/img/restofatt.jpg";
import restowouroud from "assets/img/restowouroud.jpg";
import { Container, Row, Col } from "reactstrap";
import MapComponent from "views/index-sections/MapComponent";

const Resto = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("Resto");
    window.scrollTo({ top: 0 });

    return function cleanup() {
      document.body.classList.remove("Resto");
    };
  });
  return (
    <>
      <IndexNavbar changeColor={false} color="" />

      <div className="main">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col md={8}>
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row>🍽️ restaurant universitaire Fattouma bourguiba</Row>
                </h2>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  le restaurant universitaire Fattouma bourguiba offre de
                  dejeuner à partir de 11h30 jusqu'à 13h30 toute la semaine sauf
                  le Dimanche
                </p>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>localisation:</Row>
                  <MapComponent longitude={35.7625298} latitude={10.8245964} />
                </h3>
                {/*MAPPPPP*/}
              </div>
            </Col>
            <Col md={4}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <img
                src={restofatt}
                alt="image1"
                height="490px"
                width="530px"
                style={{ borderRadius: "10px", marginBottom: "10px" }}
              />{" "}
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row>🍽️ restaurant universitaire Les Roses (wouroud) </Row>
                </h2>
              </div>
              <div>
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  le restaurant universitaire Les Roses offre de dejeuner à
                  partir de 11h30 jusqu'à 13h30 toute la semaine sauf le
                  Dimanche
                </p>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>localisation:</Row>
                </h3>
                {/*MAPPPPP*/}
                <MapComponent longitude={35.767542} latitude={10.835291} />
              </div>
            </Col>
            <Col md={4}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <img
                src={restowouroud}
                alt="image1"
                height="490px"
                width="530px"
                style={{ borderRadius: "10px", marginBottom: "10px" }}
              />{" "}
              <br />
              <br />
            </Col>
          </Row>
        </Container>
        <br />
      </div>
      <DemoFooter />
    </>
  );
};

export default Resto;
