import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Cards from "views/index-sections/Cards.js";
import math from "assets/img/cards/math.jpg";
import info from "assets/img/cards/info.jpg";
import tech from "assets/img/cards/tech.jpg";
import { Container, Row, Col } from "reactstrap";

const Departement = () => {
  document.documentElement.classList.remove("nav-open");
  window.scrollTo({ top: 0 });

  React.useEffect(() => {
    document.body.classList.add("Departement");
    return function cleanup() {
      document.body.classList.remove("Departement");
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
              <h2>
                <Row>Nos Départements</Row>
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
                title="Mathematiques"
                subtitle="Directeur:"
                description=" Mohamed Eloued."
                imageSrc={math}
                link="/DepMath"
              />
              <Cards
                title="Technologie"
                subtitle="Directeur:"
                description=" Sadok Bazine."
                imageSrc={tech}
                link="/DepTech"
              />
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
};

export default Departement;
