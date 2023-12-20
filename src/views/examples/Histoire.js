import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import image1 from "assets/img/histoire-1.jpg";
import { Container, Row, Col } from "reactstrap";

const Histoire = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("histoire");
    return function cleanup() {
      document.body.classList.remove("histoire");
    };
  });
  return (
    <>
      <IndexNavbar changeColor={false} />

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
          <div className="title">
            <h2>Histoire de l'Isimm</h2>
          </div>
          <div id="buttons">
            <Row>
              <Col md="7">
                <br />

                <br />
                <img src={image1} alt="image1" height="490px" />
              </Col>

              <Col md="5">
                <div className="Contenu ">
                  L'Institut Supérieur d'Informatique et de Mathématiques de
                  l’Université de Monastir (ISIMM) est créé par le décret n°
                  1623 du 09 juillet 2002, est un établissement d’enseignement
                  supérieur scientifique, public, placé sous la tutelle du
                  Ministère de l'Enseignement Supérieur de la Recherche
                  Scientifique. Dans un premier temps ses formations ont été
                  axées sur les métiers de l'Informatique et de ses
                  applications, des Mathématiques et ses applications
                  (Modélisation, Statistique).
                </div>
              </Col>
            </Row>
            <Row>
              <div className="Contenu">
                Au fil du temps il s’est vu autorisé à diversifier ses
                formations pour arriver à en dispenser toute une panoplie de
                formations allant de la licence aux Mastères de recherche et
                professionnel en passant par une formation d’ingénieurs en
                électronique. Avec bien sure la multiplication des spécialités
                offertes. En règle générale nos formations s’articulent autour
                de trois départements et d’une architecture LMD. Elles ont été
                enrichies ces dernières années par une formation spécifique du
                diplôme d’ingénieur en électronique. La qualité des formations
                qu'il propose ainsi que leur adéquation aux attentes du marché,
                s'appuient sur l'expérience de ses enseignants en matière de
                formation, expérience concrétisée par l’ouverture de
                l’établissement sur son environnement socioéconomique et
                industriel. Dans le cadre de l’harmonisation du système
                d’enseignement supérieur en Tunisie qui vise à faciliter les
                orientations progressives et à favoriser la mobilité nationale
                et internationale des étudiants. Tisser des liens, c'est la
                force de notre école l’ISIMM propose des offres de formation
                dans le domaine des Sciences et Technologies dans les
                disciplines suivantes : Informatique, Mathématiques et
                Electronique. Ces offres sont régies par trois grands principes
                : architecture des diplômes autour de la Licence, du Mastère et
                du Doctorat (LMD) la mise en place du système de crédits un
                déroulement des études basé sur le semestre et le choix d’Unités
                d’Enseignements (UE). La gouvernance de l’ISIMM est assurée par
                une direction aidée dans sa mission par un dynamique conseil
                scientifique, une direction des études, une direction des stages
                et une administration quelque peu jeune mais dynamique et
                motivée. Il n’en demeure pas moins que bon nombre d’enseignants
                travaillant dans l’ombre ont contribué sans aucun ménagement à
                la bonne marche de l’ISIMM et à la réussite de tous ses
                projets."
              </div>
            </Row>
          </div>
        </Container>
        <br />
      </div>
      <DemoFooter />
    </>
  );
};

export default Histoire;
