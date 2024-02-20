import React, { useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Cards from "views/index-sections/Cards.js";
import math from "assets/img/cards/math.jpg";
import info from "assets/img/cards/info.jpg";
import tech from "assets/img/cards/tech.jpg";
import planLmath from "assets/docs/planLmath.pdf";
import { Container, Row, Col } from "reactstrap";

const Formationdepmath = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("Formationdepinfo");
    return function cleanup() {
      document.body.classList.remove("Formationdepinfo");
    };
  });

  const sectionScroll = () => {
    const sectionId = window.location.hash.slice(1);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 10, behavior: "smooth" });
    }
  };
  useEffect(() => {
    sectionScroll();
  }, []);
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
            <section id="section1">
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row> Licence Mathématiques Appliquées</Row>
                </h2>
              </div>
              <div>
                <p
                  style={{
                    color: "black",
                    fontSize: "17px",
                    fontWeight: "300",
                  }}
                >
                  Contrairement aux idées reçues, la licence de mathématiques
                  n’aboutit pas uniquement à l’enseignement ou à la recherche.
                  Les débouchés sont nombreux. Météorologie, finance, banque,
                  assurance, médecine, biologie, fiabilité, transport… Vous
                  n’imaginez pas tous les secteurs dans lesquels vous pourrez
                  travailler en suivant des études de mathématiques ! Cependant,
                  la Licence n’est généralement pas suffisante pour intégrer le
                  marché du travail. La majorité des postes à pourvoir exigent
                  en effet un bac+5 minimum, les entreprises étant à la
                  recherche de profils professionnalisés et rapidement
                  opérationnels. Après avoir acquis un socle de connaissances
                  solides en mathématiques fondamentales et appliquées et en
                  matières scientifiques plus générales, il est ainsi conseillé
                  de vous spécialiser en Master.
                </p>
              </div>
              <div>
                <div>
                  <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                    {" "}
                    <Row>Plan d'études:</Row>
                  </h3>
                </div>
                <br />
                <strong>
                  <a
                    className="myButtonBleu"
                    href={planLmath}
                    download
                    target="_blank"
                  >
                    Télécharger le plan d'études
                  </a>
                </strong>
              </div>
            </section>{" "}
            <br />
            <section id="section2">
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row> Master professionnel : Data Science</Row>
                </h2>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Objectifs de la formation:</Row>
                </h3>
              </div>
              <br />
              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                Préparer les étudiants aux domaines liés à l’analyse de données
                et à l’informatique décisionnelle:
              </p>
              <br />
              <ul>
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Intégrer des équipes de développement d’applications
                  décisionnelles destinées aux grandes entreprises
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Approfondir les connaissances en statistique
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Approfondir les connaissances en outils décisionnels
                </li>
                <br />
              </ul>
              <li
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                Développer la capacité à élaborer projet décisionnel dans toutes
                ses phases
              </li>
              <br />
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Acquis d'apprentissage:</Row>
                </h3>
              </div>
              <br />{" "}
              <p
                style={{ fontWeight: "400", color: "black", fontSize: "17px" }}
              >
                A la fin de la formation, les participants doivent être capables
                de :
              </p>
              <ul>
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Intégrer des équipes de développement d’applications
                  décisionnelles destinées aux grandes entreprises
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Assurer la fonction de Data Analyst dans les entreprises
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Créer leurs propres entreprises de développement de solutions
                  décisionnelles
                </li>
                <br />
              </ul>
              <p
                style={{ fontWeight: "400", color: "black", fontSize: "17px" }}
              >
                Aptitudes (savoir-faire) :
              </p>
              <ul>
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Connaissances en statistique avancée et en analyse prédictive
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Maîtrise des techniques de développement spécifiques à ces
                  domaines
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Initiation aux techniques de recherche liées à l’analyse de
                  données
                </li>
                <br />
              </ul>
              <div>
                <div>
                  <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                    {" "}
                    <Row>Plan d'études:</Row>
                  </h3>
                </div>
                <br />
                <strong>
                  <a className="myButtonBleu" href="" target="_blank">
                    Télécharger le plan d'études
                  </a>
                </strong>
              </div>
            </section>
            <br />
            <br />
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
};

export default Formationdepmath;
