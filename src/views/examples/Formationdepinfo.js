import React, { useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import plan_ING_info from "assets/docs/plan_ING_info.pdf";
import plan_prepa_1 from "assets/docs/plan_prepa_1.pdf";
import acce_cycl_prep from "assets/img/acce_cycl_prep.png";
import { Container, Row, Col } from "reactstrap";

const Formationdepinfo = () => {
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
                  <Row> Licence Sciences de l’Informatique</Row>
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
                  Former les étudiants dans les technologies de l’informatique
                  et des systèmes d’information afin de développer leurs
                  compétences et leur créativité dans ces domaines. Au terme de
                  cette formation, les licenciés doivent être capables de
                  développer des applications informatiques complètes, des sites
                  web statiques et dynamiques ainsi que des réalisations pour
                  l’aide à la décision comme les tableaux de bord et les
                  applications décisionnelles.
                </p>
              </div>
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Objectifs de la formation:</Row>
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
                  Développer les connaissances sur les outils et techniques de
                  développement d’applications informatiques utilisées dans le
                  monde professionnel
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Développer les compétences de développement spécifique comme
                  les sites web, les tableaux de bord et les applications
                  décisionnelles
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Développer les compétences permettant d’évaluer les
                  réalisations pour la gestion informatisée afin d’y proposer
                  des améliorations pertinentes, notamment dans le contexte
                  décisionnel
                </li>
                <br />
              </ul>
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
                  Intégrer des équipes de développement d’applications
                  informatiques complètes destinées aux grandes entreprises
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Créer leurs propres entreprises de développement de sites web
                  statiques et dynamiques ainsi que des applications mobiles et
                  des réalisations décisionnelles.
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Maitrise des concepts généraux relatifs à l’informatique et à
                  l’aide à la décision
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
                  Connaissances du domaine professionnel de gestion et de
                  développement d’applications informatiques et décisionnelles
                </li>
                <br />
                <li
                  style={{
                    fontWeight: "300",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Connaissances des techniques de communication et des nouvelles
                  technologies
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
            </section>{" "}
            <br />
            <section id="section2">
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row> Master de recherche en génie logiciel</Row>
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
                  L'informatique est aujourd'hui devenue la colonne vertébrale
                  de toute organisation quelle qu'elle soit. Le métier
                  d'informaticien est donc une pièce incontournable et
                  stratégique de toute structure qui crée de l'information, mais
                  également les outils de l'information. Les informaticiens
                  dotés d'un Master, de plus en plus spécialisé , sont ainsi
                  très recherchés. Très ouvert, avec des débouchés nombreux et
                  attractifs, ce métier aborde aussi bien l'informatique pure,
                  que la cybersécurité,l'intelligence artificielle, Data
                  Science, Bg Data, les systèmes embarqués ou les logiciels.
                </p>
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
                Le Mastère recherche en génie logiciel a pour but de donner des
                connaissances théoriques et pratiques de haut niveau dans les
                disciplines informatiques. Dans ce cadre, de solides
                connaissances sont particulièrement nécessaires suite au
                développement des nouvelles technologies de l’information et de
                la communication.
              </p>
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
            <section id="section3">
              <section id="section3">
                <div className="title">
                  <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                    <Row> Master Professionnel en génie logiciel</Row>
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
                    C'est un secteur en permanente mutation. Le monde de
                    l'informatique est devenu une constellation composée de
                    multiples métiers. Les informaticiens sont recherchés dans
                    tous les domaines de l'économie, les entreprises de services
                    numériques, les éditeurs de logiciels, bien sûr, mais aussi
                    les banques, les entreprises industrielles et commerciales,
                    les administrations, les organisations gouvernementales, et
                    également les start-up qui se concentrent essentiellement
                    dans les secteurs de pointe innovants, comme les
                    applications mobiles, les objets connectés, le e-commerce,
                    l'intelligence artificielle...C'est un secteur en permanente
                    mutation. Le monde de l'informatique est devenu une
                    constellation composée de multiples métiers. Les
                    informaticiens sont recherchés dans tous les domaines de
                    l'économie, les entreprises de services numériques, les
                    éditeurs de logiciels, bien sûr, mais aussi les banques, les
                    entreprises industrielles et commerciales, les
                    administrations, les organisations gouvernementales, et
                    également les start-up qui se concentrent essentiellement
                    dans les secteurs de pointe innovants, comme les
                    applications mobiles, les objets connectés, le e-commerce,
                    l'intelligence artificielle...
                  </p>
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
                  Le Mastère recherche en génie logiciel a pour but de donner
                  des connaissances théoriques et pratiques de haut niveau dans
                  les disciplines informatiques. Dans ce cadre, de solides
                  connaissances sont particulièrement nécessaires suite au
                  développement des nouvelles technologies de l’information et
                  de la communication.
                </p>
                <br />
                <div>
                  <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                    {" "}
                    <Row>Acquis d'apprentissage:</Row>
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
                  A la fin de la formation, les participants doivent être
                  capables de :
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
                    Créer leurs propres entreprises de développement de
                    solutions décisionnelles
                  </li>
                  <br />
                </ul>
                <p
                  style={{
                    fontWeight: "400",
                    color: "black",
                    fontSize: "17px",
                  }}
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
                    Connaissances en statistique avancée et en analyse
                    prédictive
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
            </section>
            <br />
            <section id="section4">
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row> Préparatoire intégré en Informatique</Row>
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
                  Depuis l’année universitaire 2019-2020, le département
                  informatique intègre un cycle préparatoire intégré. Un cycle
                  préparatoire intégré en science de l'informatique dure 2 ans
                  au cours duquel un seul redoublement est permis. L’admission à
                  ce cycle préparatoire intégré se fait par l’orientation de
                  nouveaux bacheliers.
                </p>
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
                {" "}
                L’objectif des deux années de préparation intégrée au cycle
                d’ingénieur de l’ISIMM est d’acquérir principalement un socle de
                connaissances solides, sur lequel s’appuiera ensuite le cycle
                ingénieur. Le programme de ces deux années intègre des cours
                bien poussés en mathématique, électronique, mais il s’en
                distingue aussi grâce à des enseignements plus concrets en
                informatique fondamentale et appliqué aux différents
                contextes.La pratique occupe une place centrale : les notions
                théoriques et leurs applications détaillées sont expliquées en
                cours intégrés (CI), puis expérimentées en travaux pratiques
                (TP) et lors des mini-projets. Les élèves rentrent donc
                rapidement dans le vif du sujet. La formation dans le cycle
                préparatoire intégrée à l’ISIMM offre la possibilité à des
                intervenants issus du monde professionnel d’intervenir pour
                assurer l’enseignement des cours et des travaux pratiques. Ces
                intervenants font travailler les étudiants sur des projets
                ingénieurs ou des études de cas réels. Les élèves ont l’occasion
                d’effectuer des mini-projets pour se familiariser à l’univers
                professionnel et mûrir leur choix de filière en cycle ingénieur.
              </p>
              <br />
              <div>
                <h3 style={{ color: "#66B2FF", fontWeight: "400" }}>
                  {" "}
                  <Row>Régime des études:</Row>
                </h3>
              </div>
              <br />
              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                {" "}
                L’Institut Supérieur d’Informatique et de Mathematiques de
                Monastir (ISIMM) propose d’assurer une formation d’ingénieurs
                comme suit :{" "}
                <ul>
                  <li>
                    {" "}
                    Un cycle préparatoire intégré en science de l'informatique
                    qui dure 2 ans au cours duquel un seul redoublement est
                    permis. L’admission à ce cycle préparatoire intégré se fait
                    par l’orientation de nouveaux bacheliers.
                  </li>
                  <li>
                    Un cycle de formation pour l’obtention d’un diplôme national
                    d’ingénieurs en informatique . Ce cycle dure 3 ans au cours
                    duquel un seul redoublement est permis. L’admission à ce
                    cycle d’ingénieur se fait par voie de concours ouvert aux
                    étudiants inscrits en cycle préparatoire intégré en science
                    de l'informatique de l’ISIMM et sur concours spécifique pour
                    les étudiants de la 3ème année licence et pour les étudiants
                    de la 1 ère année Master.
                  </li>
                </ul>
                La capacité d’accueil et le nombre de places ouverts pour le
                cycle ingénieur sont fixés par le conseil scientifique de
                l’ISIMM sur proposition du département. Les étudiants qui
                réussissent la deuxième année du cycle préparatoire intégré et
                qui ne sont pas admis au cycle d’ingénieur seront admis de plein
                droit en troisième année de la Licence en Science de
                l’Informatique de l’ISIMM ou éventuellement en troisième année
                de la licence en informatique dans une autre institution.
              </p>
              <br />
              <img src={acce_cycl_prep} />
              <br /> <br />
              <p
                style={{ fontWeight: "300", color: "black", fontSize: "17px" }}
              >
                Les étudiants les mieux classés de la troisième année licence
                peuvent intégrer la première année du cycle ingénieur l’année
                universitaire suivante après présentation de leur dossier. Le
                nombre de places ouvert est fixé par le conseil scientifique de
                l’Institut Supérieur d’Informatique et de Multimédia de Sfax et
                sur proposition du département. L’accès au cycle d’études
                d’ingénieur se fait par concours spécifique sous la supervision
                du ministère de l’enseignement supérieur et de la recherche
                scientifique et de la direction générale des études
                technologiques.
              </p>
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
            <section id="section5">
              <div className="title">
                <h2 style={{ color: "#01438D", fontWeight: "400" }}>
                  <Row> Ingénieurs Informatique</Row>
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
                  <a
                    className="myButtonBleu"
                    href={plan_ING_info}
                    download
                    target="_blank"
                  >
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

export default Formationdepinfo;
