import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import foyermezri from "assets/img/foyermezri.jpg";
import ff from "assets/img/ff.jpg";
import { Container, Row, Col } from "reactstrap";
import MapComponent from "views/index-sections/MapComponent";

const Foyers = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("Foyers");
    return function cleanup() {
      document.body.classList.remove("Foyers");
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
                  <Row> 🚹 Foyer universitaire Imem Mezri Pour garçons</Row>
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
                  Le Foyer El Imem El Mezri, un lieu et une année que vous
                  n'oublierez jamais. Composer avec ses bons et mauvais côtés
                  vous aidera à vivre une expérience inoubliable avec ses hauts
                  et ses bas.
                </p>
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Avantages:
                </p>
                <ul
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  <li>
                    Emplacement agréable : Situé à Hay El Omrane, bien meilleur
                    que Stah Jabeur où se trouve Isimm. Le Resto Skanes n'est
                    pas trop loin non plus.
                  </li>
                  <li>
                    Douches chaudes 24/7, contrairement à d'autres foyers.
                  </li>
                  <li>
                    {" "}
                    Des fêtes, du cinéma et des activités sont organisées
                    périodiquement, et vous pouvez profiter de regarder la
                    télévision, de jouer aux échecs ou au ping-pong chaque
                    week-end.
                  </li>
                  <li>
                    Un jardin agréable où vous rencontrerez de nouveaux amis,
                    aurez vos moments de tranquillité, et danserez et chanterez
                    lors de chaque fête organisée par le foyer
                  </li>
                </ul>
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Défauts:
                </p>
                <ul
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  <li>
                    Il n'y a pas de cuisine commune, de réfrigérateur ou de
                    cuisinières, mais vous pouvez utiliser votre "Resistance"
                    sans être puni. (En pratique, il n'y a pas de contrôle de
                    chambre)
                  </li>
                  <li>
                    {" "}
                    Le wifi n'est pas disponible dans toutes les chambres.
                  </li>
                  <li>
                    {" "}
                    Le principal problème : il est assez loin d'Isimm (3,8 km),
                    ce qui entraîne une perte de temps lors des allers-retours à
                    'Stah Jabeur'. Si vous avez l'habitude de prendre le bus ou
                    de marcher de longues distances, cela peut ne pas poser de
                    problème. Sinon, avoir un vélo pourrait être la meilleure
                    solution car il n'y a pas de bus spéciaux avec des horaires
                    adaptés. (apportez un cadenas pour le vélo)
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>localisation:</Row>
                  <MapComponent longitude={35.7656997} latitude={10.8119882} />
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
                src={foyermezri}
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
                  <Row>
                    {" "}
                    🚺 Foyer universitaire Fattouma Bourguiba Pour filles
                  </Row>
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
                  Niché idéalement au cœur de Stah Jaber, Fattouma Bourguiba
                  bénéficie d'un emplacement stratégique qui marie commodité et
                  tranquillité, offrant le meilleur des deux mondes. Et ce n'est
                  pas tout - avec le délicieux Resto Fattouma à proximité, vous
                  pouvez vous délecter de délicieux repas et de conversations
                  agréables, créant ainsi de beaux moments avec de nouveaux
                  amis. Marcher à l'intérieur de Fattouma Bourguiba semble être
                  une expérience agréable et dynamique ! Explorons les
                  différents espaces et équipements :
                </p>
                <ul
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  <li>
                    Jardin : Le foyer dispose d'un jardin spacieux avec de
                    petits bureaux, offrant un environnement paisible🍀 pour que
                    les étudiantes puissent prendre leurs repas ou étudier en
                    plein air. Cet espace vert offre une pause rafraîchissante
                    par rapport aux activités académiques.
                  </li>
                  <li>
                    Salle à manger : Le foyer dispose d'une grande salle à
                    manger où les étudiantes se retrouvent, notamment pendant
                    les iftars du Ramadan, pour partager des repas tout en
                    regardant la télévision. La présence d'un réfrigérateur est
                    pratique pour stocker les aliments et les boissons.
                  </li>
                  <li>
                    {" "}
                    Bibliothèque : La bibliothèque calme offre une atmosphère
                    propice à l'étude, et avec le Wi-Fi gratuit disponible, elle
                    devient un excellent endroit pour que les étudiantes fassent
                    des recherches et accèdent à des ressources en ligne
                  </li>
                  <li>
                    Activités : Le foyer organise diverses activités, notamment
                    des fêtes, des projections de films et d'autres événements
                    pour maintenir les étudiantes engagées et diverties. Après
                    les examens, des soirées musicales offrent un moyen amusant
                    pour les filles de se détendre et de se relaxer.
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>localisation:</Row>
                  <MapComponent longitude={35.7666409} latitude={10.8352227} />
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
                src={ff}
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

export default Foyers;
