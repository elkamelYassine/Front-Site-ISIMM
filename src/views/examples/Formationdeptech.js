import React, { useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import plan_TIC from "assets/docs/planLTIC.pdf";
import plan_EEA from "assets/docs/planeease.pdf";
import plan_MIM from "assets/docs/planeeamim.pdf";
import plan_prepa_1 from "assets/docs/plan_prepa_1.pdf";
import acce_cycl_prep from "assets/img/acce_cycl_prep.png";
import { Container, Row, Col } from "reactstrap";

const Formationdeptech = () => {
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
                  <Row> Licence TIC- Parcours: Réseaux et IOT (RIOT)</Row>
                </h2>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Objectifs de la formation:</Row>
                </h3>
              </div>
              <br />
              <div>
                <p
                  style={{
                    color: "black",
                    fontSize: "17px",
                    fontWeight: "300",
                  }}
                >
                  La licence unifiée en Technologies de l'Information et de
                  Communication (TIC) permet de répondre aux besoins de la
                  société moderne. La maîtrise des technologies de l’information
                  et de la communication est la composante clé de cette
                  formation. Elle permet aussi de répondre aux tendances
                  prévalant actuellement au niveau national et international. La
                  formation donne aux étudiants les connaissances de base sur
                  les sujets et les outils : mathématiques, télécommunications,
                  électroniques, conceptuelle, réseaux, informatique, etc.
                  nécessaires au développement d’application, de bases de
                  données, etc. Cette licence unifiée en TIC vise à doter les
                  étudiants de compétences scientifiques dans les domaines des
                  Télécommunications et Nouvelles Technologies et Systèmes IoT.
                  Les étudiants issus de cette formation peuvent continuer en
                  Master de recherche, en Master professionnel dans des
                  disciplines de même spécialité. Ils peuvent aussi participer
                  aux concours spécifiques pour entrer dans les écoles
                  d’ingénieurs. La licence Fondamentale proposée est constituée
                  d’un enseignement commun du Semestre 1 au Semestre 3. A partir
                  du semestre 4, l’étudiant choisira un parcours parmi les deux
                  parcours proposés :{" "}
                </p>
                <ul>
                  <li
                    style={{
                      fontWeight: "300",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    Option 1 : Télécommunications
                  </li>
                  <li
                    style={{
                      fontWeight: "300",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    Option 2 : Systèmes IoT Le semestre 6 sera réservé pour
                    effectuer un stage de fin d’Études de 30 crédits qui sera
                    validé par une soutenance.
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Perspectives académiques :</Row>
                </h3>
              </div>
              <br />{" "}
              <p
                style={{ fontWeight: "400", color: "black", fontSize: "17px" }}
              >
                Les étudiants issus de cette formation peuvent continuer leurs
                études :
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
                  En cycle d’ingénieurs (en participant aux concours
                  spécifiques)
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  En master de recherche dans des disciplines de mêmes
                  spécialités
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  En master professionnelle dans des disciplines de mêmes
                  spécialités
                </li>
                <br />

                <br />
              </ul>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Débouchés :</Row>
                </h3>
              </div>
              <br />
              <div>
                <p
                  style={{
                    color: "black",
                    fontSize: "17px",
                    fontWeight: "300",
                  }}
                >
                  Les étudiants issus de cette formation peuvent être embauchés
                  dans des sociétés spécialisées dans les domaine des TICs d'une
                  façon générale.
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
                    href={plan_TIC}
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
                  <Row> Licence EEA - Parcours : Systèmes Embarqués (SE)</Row>
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
                  Dédiée aux trois grands domaines de l’EEA que sont
                  l’électronique, l’énergie électrique et l’automatique, son but
                  est de former des étudiants ayant d’excellentes compétences
                  dans ces domaines mais également en génie mécanique, génie
                  civil, mécanique... et ainsi de préparer des futurs cadres
                  dans le secteur de l’industrie, de l’enseignement technique.
                </p>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Quels débouchés après la licence EEA ?</Row>
                </h3>
              </div>
              <br />
              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                Si, comme pour les autres licences, la licence Électronique,
                Électrotechnique et Automatique (EEA) est conçue pour une
                poursuite d’études, il peut être intéressant de s’orienter vers
                une licence professionnelle à l’issue de la L2, afin de sortir à
                bac +3 avec un diplôme professionnel. Les diplômés qui
                souhaitent entrer sur le marché du travail peuvent s’inscrire à
                des concours administratifs ou postuler en entreprise en tant
                qu’assistant ingénieur. À celles et ceux qui veulent continuer
                encore 2 ans, il existe de nombreux masters, parmi lesquels :
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
                  EEA, Électronique des systèmes embarqués et
                  télécommunications.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Ingénierie des systèmes temps-réel.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Robotique décision et commande.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Signal imagerie et applications audio-vidéo médicales et
                  spatiales.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Radiophysique médicale et génie bio-médical.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Sciences et technologies des plasmas.
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
                  <a
                    className="myButtonBleu"
                    href={plan_EEA}
                    download
                    target="_blank"
                  >
                    Télécharger le plan d'études
                  </a>
                </strong>
              </div>
            </section>
            <br />
            <section id="section3">
              <section id="section3">
                <div className="title">
                  <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                    <Row>
                      {" "}
                      Licence EEA - Parcours: Mesure Instrumentation et
                      Métrologie (MIM)
                    </Row>
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
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Ce parcours forme des professionnels de l’instrumentation dans
                  des domaines liés à la métrologie et les mesures :
                  environnementales, biologiques, industrielles, médicales…
                  L’objectif de cette formation est de former des professionnels
                  capables de contrôler les instruments industriels
                  (étalonnages, normes...) pour garantir une production
                  industrielle de qualité.
                </p>
                <p
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Au terme de cette formation, les diplômés auront acquis les
                  connaissances scientifiques et organisationnelles nécessaires
                  à l’entreprise engagée dans une démarche métrologique et sont
                  capables :
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
                    d’analyser les besoins métrologiques et les documents
                    réglementaires, techniques et normatifs.
                  </li>
                  <br />
                  <li
                    style={{
                      fontWeight: "300",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    de définir les procédures d’étalonnage des instruments de
                    mesure.
                  </li>
                  <br />
                  <li
                    style={{
                      fontWeight: "300",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    de caractériser, de valider et d’estimer une incertitude.
                  </li>
                  <br />
                  <li
                    style={{
                      fontWeight: "300",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    de gérer les parcs d’instrumentation.
                  </li>
                  <br />
                </ul>
                <div>
                  <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                    {" "}
                    <Row>Programme:</Row>
                  </h3>
                </div>
                <br />{" "}
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Le programme est basé sur l’acquisition de compétences
                  reconnues et recherchées par le milieu industriel : La
                  formation est structurée en blocs de connaissances et de
                  compétences ainsi qu’en unités d’enseignement.
                </p>
                <div>
                  <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                    {" "}
                    <Row>Débouchés :</Row>
                  </h3>
                </div>
                <br />{" "}
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Métiers visés :
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
                    Technicien supérieur en mesures et instrumentation.
                  </li>
                  <br />
                  <li
                    style={{
                      fontWeight: "300",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    Technicien supérieur en qualification et métrologie
                    industrielle.
                  </li>
                  <br />
                  <li
                    style={{
                      fontWeight: "300",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    Responsable d’un parc d’instrumentation.
                  </li>
                  <br />
                  <li
                    style={{
                      fontWeight: "300",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    Technicien référent en laboratoire d’analyse et de
                    certification.
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
                    <a className="myButtonBleu" href={plan_MIM} target="_blank">
                      Télécharger le plan d'études
                    </a>
                  </strong>
                </div>
              </section>
            </section>
            <br />
            <section id="section4">
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row>
                    {" "}
                    Master de recherche en Microélectronique et Instrumentation
                  </Row>
                </h2>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Objectifs générale:</Row>
                </h3>
              </div>
              <br />
              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                {" "}
                L’objectif général de la formation en mastère de recherche en
                microélectronique et instrumentation vise à former des
                compétences qui disposent de toute l’expertise et le
                savoir-faire en matière de la microélectronique ainsi que
                l’instrumentation associée (microsystèmes, systèmes embarqués,
                micro-capteurs,...). En plus, ce master assure une meilleure
                formation pour les futurs doctorants.
              </p>
              <br />
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Objectifs spécifiques :</Row>
                </h3>
              </div>
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
                  Maîtriser un savoir-faire en conception, fabrication
                  microélectronique et caractérisation physique/électrique de
                  dispositifs microélectroniques et de microsystèmes
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Gérer et exécuter un programme de recherche dans le domaine de
                  la microélectronique
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Concevoir et développer des solutions innovantes aussi bien
                  pour la recherche fondamentale que pour des applications
                  technologiques dans le secteur publique ou privé
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Appréhender un système industriel complexe sous diverses
                  facettes - matérielles et logicielles
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Avoir des compétences solides sur les systèmes électroniques
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Développer les capacités d’organisation et de travail en
                  projet
                </li>
              </ul>
              <br />
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Acquis d’apprentissages (Learning Outcomes):</Row>
                </h3>
              </div>
              <br />
              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                A la fin de la formation, les participants doivent être capables
                de :
              </p>
              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                Connaissances (savoir) :
              </p>
              <ul>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Acquérir des notions de bases concernant les composants à
                  semi-conducteurs
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Maîtriser les fondements physiques des composants
                  électroniques et optoélectroniques
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Comprendre les fondements théoriques des micro-capteurs et des
                  microsystèmes
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Maitriser les systèmes électroniques analogiques et numériques
                </li>
                <br />
              </ul>
              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                Aptitudes (savoir-faire) :
              </p>

              <ul>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Savoir exploiter les cadres théoriques et prendre du recul
                  dans les expériences
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Programmer dans un langage informatique spécifique
                  (programmation OO pour l’électronique)
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Concevoir des systèmes sur puces
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Concevoir des circuits intégrés
                </li>

                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Savoir caractériser des composants électroniques et des
                  microsystèmes
                </li>
                <br />
              </ul>

              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                Aptitudes (savoir-être) :
              </p>

              <ul>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Prendre systématiquement des initiatives pour réaliser des
                  idées créatives.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Prendre systématiquement des initiatives pour réaliser ses
                  idées créatives.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Démontrer une capacité à travailler à la fois individuellement
                  et savoir s’intégrer dans des équipes pluridisciplinaires
                  composées de compétences différentes, mais complémentaires.
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
                  <a
                    className="myButtonBleu"
                    href={plan_prepa_1}
                    download
                    target="_blank"
                  >
                    Télécharger le plan d'études CPI
                  </a>
                </strong>
              </div>
            </section>
            <br />
            <section id="section6">
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row>
                    Master professionnel : Ingénierie en Instrumentation
                    Industrielle
                  </Row>
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
                <ul>
                  <li>
                    Doter les étudiants des connaissances définies dans le
                    référentiel des métiers de l’informatique en ciblant le
                    métier d’ingénieur en informatique : ingénierie Logiciels
                    intelligents et distribués.
                  </li>
                  <li>
                    Développer la compétence des étudiants par diverses formes
                    d’activités pratiques et de mise en situation réelle
                  </li>
                  <li>
                    Faire acquérir aux élèves ingénieur un savoir faire par les
                    stages, les workshops, les études de cas pratiques, les
                    pépinières, etc.{" "}
                  </li>
                  <li>
                    Développer les qualités de communication, de management
                    d’équipe, de leadership et d’entreprenariat chez nos élèves
                    ingénieurs.{" "}
                  </li>
                  <li>
                    Enrichir la culture générale de l’ingénieur en termes de
                    finance, marketing, droit et gestion
                  </li>
                </ul>
              </p>
              <br />
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Les compétences et le savoir-faire :</Row>
                </h3>
              </div>
              <br />{" "}
              <p
                style={{ fontWeight: "400", color: "black", fontSize: "17px" }}
              >
                La formation d’ingénieur en informatique de l’Institut Supérieur
                d’Informatique et de Mathématique de Monastir vise à former des
                compétences dans (voir référentiel métiers):
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
                  le développement et le suivi d'applications logicielles{" "}
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  la conception ou la validation de systèmes comportant de
                  nombreux composants logiciels et devant répondre à des
                  exigences de sûreté et de sécurité
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  dans les langages de programmation et les techniques
                  algorithmiques
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  le traitement des problématiques très pratiques et actuelles
                  en intelligence artificielle, comme celles qui ont trait aux
                  systèmes d'information et de décision, aux mémoires
                  d'entreprises, à la fouille de données et aux bases de données
                  web, au multimédia ou au traitement des images.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  l’ingénierie et la définition de réseaux d’entreprises
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  l’ingénierie des applications distribués cloud et IoT
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  l’analytique des larges volumes des données
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  la gestion des processus métiers{" "}
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  e test et validation de logiciels{" "}
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  la communication, le leader ship et l’entreprenariat{" "}
                </li>
                <br />
              </ul>
              <p
                style={{ fontWeight: "400", color: "black", fontSize: "17px" }}
              >
                Les issus professionnelle du Parcours :
              </p>
              <ul>
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  La formation d’ingénieur en informatique de l’Institut
                  Supérieur d’Informatique et de Mathématique de Monastir vise à
                  former des compétences dans (voir référentiel métiers):
                </p>
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  ingénieur intelligence artificielle{" "}
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
                  scientifique des données{" "}
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  chef de projet maîtrise d’œuvre, intégrateur d’applications
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
                  Ingénieur développeurs
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
                  Ingénieur système Big Data, Cloud et Iot
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
                  <a className="myButtonBleu" href="" download target="_blank">
                    Télécharger le plan d'études
                  </a>
                </strong>
              </div>
            </section>
            <section id="section5">
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row> Ingénieurs Electronique et Microélectronique</Row>
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
                <ul>
                  <li>
                    Doter les étudiants des connaissances définies dans le
                    référentiel des métiers de l’informatique en ciblant le
                    métier d’ingénieur en informatique : ingénierie Logiciels
                    intelligents et distribués.
                  </li>
                  <li>
                    Développer la compétence des étudiants par diverses formes
                    d’activités pratiques et de mise en situation réelle
                  </li>
                  <li>
                    Faire acquérir aux élèves ingénieur un savoir faire par les
                    stages, les workshops, les études de cas pratiques, les
                    pépinières, etc.{" "}
                  </li>
                  <li>
                    Développer les qualités de communication, de management
                    d’équipe, de leadership et d’entreprenariat chez nos élèves
                    ingénieurs.{" "}
                  </li>
                  <li>
                    Enrichir la culture générale de l’ingénieur en termes de
                    finance, marketing, droit et gestion
                  </li>
                </ul>
              </p>
              <br />
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Les compétences et le savoir-faire :</Row>
                </h3>
              </div>
              <br />{" "}
              <p
                style={{ fontWeight: "400", color: "black", fontSize: "17px" }}
              >
                La formation d’ingénieur en informatique de l’Institut Supérieur
                d’Informatique et de Mathématique de Monastir vise à former des
                compétences dans (voir référentiel métiers):
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
                  le développement et le suivi d'applications logicielles{" "}
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  la conception ou la validation de systèmes comportant de
                  nombreux composants logiciels et devant répondre à des
                  exigences de sûreté et de sécurité
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  dans les langages de programmation et les techniques
                  algorithmiques
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  le traitement des problématiques très pratiques et actuelles
                  en intelligence artificielle, comme celles qui ont trait aux
                  systèmes d'information et de décision, aux mémoires
                  d'entreprises, à la fouille de données et aux bases de données
                  web, au multimédia ou au traitement des images.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  l’ingénierie et la définition de réseaux d’entreprises
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  l’ingénierie des applications distribués cloud et IoT
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  l’analytique des larges volumes des données
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  la gestion des processus métiers{" "}
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  e test et validation de logiciels{" "}
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  la communication, le leader ship et l’entreprenariat{" "}
                </li>
                <br />
              </ul>
              <p
                style={{ fontWeight: "400", color: "black", fontSize: "17px" }}
              >
                Les issus professionnelle du Parcours :
              </p>
              <ul>
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  La formation d’ingénieur en informatique de l’Institut
                  Supérieur d’Informatique et de Mathématique de Monastir vise à
                  former des compétences dans (voir référentiel métiers):
                </p>
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  ingénieur intelligence artificielle{" "}
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
                  scientifique des données{" "}
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  chef de projet maîtrise d’œuvre, intégrateur d’applications
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
                  Ingénieur développeurs
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
                  Ingénieur système Big Data, Cloud et Iot
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
                  <a className="myButtonBleu" href="" download target="_blank">
                    Télécharger le plan d'études
                  </a>
                </strong>
              </div>
            </section>
            <br />
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
};

export default Formationdeptech;
