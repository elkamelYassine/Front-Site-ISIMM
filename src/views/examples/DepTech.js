import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Cards from "views/index-sections/Cards.js";
import math from "assets/img/cards/math.jpg";
import info from "assets/img/cards/info.jpg";
import tech from "assets/img/cards/tech.jpg";
import { Container, Row, Col } from "reactstrap";

const DepTech = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("DepTech");
    return function cleanup() {
      document.body.classList.remove("DepTech");
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
        <div className="section">
          <Container>
            <div className="title">
              <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                <Row> Département Technologie</Row>
              </h2>
            </div>
            <div className="title">
              <h3 style={{ fontWeight: "300" }}>
                <Row>Formations en relation:</Row>
              </h3>
            </div>
            <ul>
              <li>
                <a
                  href="/Formationdeptech#section1"
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Licence TIC- Parcours: Réseaux et IOT (RIOT)
                </a>
              </li>
              <br />
              <li>
                <a
                  href="/Formationdeptech#section2"
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Licence EEA - Parcours : Systèmes Embarqués (SE)
                </a>
              </li>
              <br />
              <li>
                <a
                  href="/Formationdeptech#section3"
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Licence EEA - Parcours: Mesure Instrumentation et Métrologie
                  (MIM)
                </a>
              </li>
              <br />
              <li>
                <a
                  href="/Formationdeptech#section4"
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Master de recherche en Microélectronique et Instrumentation
                </a>
              </li>
              <br />
              <li>
                <a
                  href="/Formationdeptech#section5"
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Ingénieurs Electronique et Microélectronique
                </a>
              </li>
              <br />
              <li>
                <a
                  href="/Formationdeptech#section6"
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Master professionnel : Ingénierie en Instrumentation
                  Industrielle
                </a>
              </li>
              <br />
            </ul>
            <div className="title">
              <h3 style={{ fontWeight: "300" }}>
                <Row>Equipe:</Row>
              </h3>
            </div>
            <p>
              <strong>Directeur: </strong>Sadok BAZINE
            </p>
            <p>
              <strong>Mail: </strong>
              <a
                href="mailto:  sadok.bazine@gmail.com"
                style={{
                  fontWeight: "300",
                  color: "black",
                  fontSize: "15px",
                  textDecoration: "underline",
                }}
              >
                {" "}
                sadok.bazine@gmail.com
              </a>
            </p>

            <div className="title">
              <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                <Row> Nos Autres Départements </Row>
              </h2>
            </div>

            <Row>
              <Cards
                title="Mathematiques"
                subtitle="Directeur:"
                description=" Mohamed Eloued."
                imageSrc={math}
                link="/DepMath"
              />
              <Cards
                title="Informatique"
                subtitle="Directeur:"
                description=" Hamel Lazhar."
                imageSrc={info}
                link="/DepInfo"
              />
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
};

export default DepTech;
