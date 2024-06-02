import React from "react";
import { Container, Row } from "reactstrap";
import Cards from "views/index-sections/Cards.js";
import tree from "assets/img/cards/tree.jpg";
import biblio from "assets/img/cards/biblio.jpg";
import court2 from "assets/img/cards/court2.jpg";
import salle from "assets/img/cards/salle.jpg";
import ActualitePage from "views/examples/ActualitePage";
import Actualite from "views/examples/Actualite";
const SectionCards = () => {
  const id = "1";

  const { actualities } = Actualite();
  actualities.map((actualitie) => console.log(actualitie.picture));
  return (
    <>
      <div className="section">
        <Container>
          <div className="title">
            <h2>
              <Row>A LA UNE</Row>
            </h2>
          </div>

          <Row>
            {actualities.map((actualitie) => (
              <Cards
                title={actualitie.title}
                description={actualitie.description}
                imageSrc={`data:image/png;base64,${actualitie.image}`}
                link={`/actualitie/${actualitie.id}`}
              />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SectionCards;
