/*eslint-disable*/
import React from "react";
import LinkedInLogo from "assets/img/LinkedInLogo-Grey-Small.png";
import FacebookLogo from "assets/img/FacebookLogo-Grey-Small.png";
import WikipediaLogo from "assets/img/WikipediaLogo-Grey-Small.png";

// reactstrap components
import { Row, Container, Button } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              Suivez nous :
              <Button
                className="btn-link"
                href="https://www.facebook.com/profile.php?id=100063489403806"
                title="Like us on Facebook"
              >
                <img src={FacebookLogo} />
              </Button>
              <Button
                className="btn-link"
                href="https://www.linkedin.com/school/isimm/mycompany/"
                title="Follow us on LinkedIn"
              >
                <img src={LinkedInLogo} />
              </Button>
              <Button
                className="btn-link"
                href="https://fr.wikipedia.org/wiki/Institut_sup%C3%A9rieur_d%27informatique_et_de_math%C3%A9matiques_de_Monastir"
                title="Read about in wikipedia"
              >
                <img src={WikipediaLogo} />
              </Button>
            </ul>
          </nav>
          <div className="credits ml-auto">
            copyright
            <span className="copyright">© {new Date().getFullYear()} </span>
          </div>
        </Row>
        <Row>Created by Yassine EL Kamel & Nour EL Houda Salem</Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
