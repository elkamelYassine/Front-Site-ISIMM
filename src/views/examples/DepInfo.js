import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Cards from "views/index-sections/Cards.js";
import math from "assets/img/cards/math.jpg"
import info from "assets/img/cards/info.jpg"
import tech from "assets/img/cards/tech.jpg"
import { Container, Row, Col } from "reactstrap";

const DepInfo = () => {
  document.documentElement.classList.remove("nav-open");
  window.scrollTo({ top: 0 });

  React.useEffect(() => {
    document.body.classList.add("DepInfo");
    return function cleanup() {
      document.body.classList.remove("DepInfo");
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
            <h2 style={{color:'#01438D',fontWeight:'400'}}>
            <Row> Département Informatique</Row>
            </h2>
        </div>
        <div className="title">
            <h3 style={{fontWeight:'300'}}>
            <Row>Formations en relation:</Row></h3>
        </div>
        <ul>
        <li><a href="/Formationdepinfo#section1" style={{fontWeight:"300",color:"black",fontSize:"18px"}}>Licence Sciences de l’Informatique</a></li><br/>
        <li><a href="/Formationdepinfo#section2" style={{fontWeight:"300",color:"black",fontSize:"18px"}}>Master de recherche en génie logiciel</a></li><br/>
        <li><a href="/Formationdepinfo#section3"style={{fontWeight:"300",color:"black",fontSize:"18px"}}>Master professionnel en génie logiciel</a></li><br/>
        <li><a href="/Formationdepinfo#section4" style={{fontWeight:"300",color:"black",fontSize:"18px"}}>Préparatoire intégré en Informatique</a></li><br/>
        <li><a href="/Formationdepinfo#section5" style={{fontWeight:"300",color:"black",fontSize:"18px"}}>Ingénieurs Informatique</a></li><br/>
        </ul>
        <div className="title">
            <h3 style={{fontWeight:'300'}}>
            <Row>Equipe:</Row></h3>
        </div>
        <p><strong>Directeur: </strong>Lazhar Hamel</p>
        <p><strong>Mail: </strong><a href="mailto: lazhar.hamel@gmail.com" style={{fontWeight:"300",color:"black",fontSize:"15px",textDecoration:'underline'}}> lazhar.hamel@gmail.com</a>
        </p>

        <div className="title">
            <h2 style={{color:'#01438D',fontWeight:'400'}}>
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

export default DepInfo;