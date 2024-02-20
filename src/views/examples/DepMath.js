import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Cards from "views/index-sections/Cards.js";
import math from "assets/img/cards/math.jpg";
import info from "assets/img/cards/info.jpg";
import tech from "assets/img/cards/tech.jpg";
import { Container, Row, Col } from "reactstrap";

const DepMath = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("DepMath");
    return function cleanup() {
      document.body.classList.remove("DepMath");
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
                <Row> Département Mathematiques</Row>
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
                  href="/Formationdepmath#section1"
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Licence Mathématiques Appliquées
                </a>
              </li>
              <br />
              <li>
                <a
                  href="/Formationdepmath#section2"
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Master professionnel : Data Science
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
              <strong>Directeur: </strong>Mohamed ELOUED
            </p>
            <p>
              <strong>Mail: </strong>
              <a
                href="mailto:  wadyel@yahoo.fr"
                style={{
                  fontWeight: "300",
                  color: "black",
                  fontSize: "15px",
                  textDecoration: "underline",
                }}
              >
                {" "}
                wadyel@yahoo.fr
              </a>
            </p>

            <div className="title">
              <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                <Row> Nos Autres Départements </Row>
              </h2>
            </div>

            <Row>
              <Cards
                title="Informatique"
                subtitle="Directeur:"
                description=" Hamel Lazhar."
                imageSrc={info}
                link="/DepInfo"
              />
              <Cards
                title="Technologie"
                subtitle="Directeur:"
                description=" Sadok Bazine."
                imageSrc={tech}
                link="DepTech"
              />
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
};

export default DepMath;
