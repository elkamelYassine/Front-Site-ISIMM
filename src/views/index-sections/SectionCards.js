import React from "react";
import { Container, Row } from "reactstrap";
import Cards from "views/index-sections/Cards.js";
import img from "assets/img/avatar.jpg";
import img2 from "assets/img/daniel-olahh.jpg";
const SectionCards = () => {
  return (
    <>
      <div className="section">
        <Container>
          <div className="title">
            <h2>
              <Row>Actualités</Row>
            </h2>
          </div>

          <Row>
            <Cards
              title="Actualité 1"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              imageSrc=""
              link=""
            />

            <Cards
              title="Actualité 2"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              imageSrc={img2}
              link=""
            />
            <Cards
              title="Actualité 3"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              imageSrc=""
              link=""
            />
            <Cards
              title="Actualité 4"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              imageSrc=""
              link=""
            />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SectionCards;
