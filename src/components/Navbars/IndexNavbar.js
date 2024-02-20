import React, { StrictMode } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import ISIMMLogo from "assets/img/logoISIMM-MEDUIM2.png";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
} from "reactstrap";
import PropTypes from "prop-types";
function IndexNavbar({ changeColor, color }) {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [direction, setDirection] = React.useState("right");
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    if (direction == "right") setDirection("down");
    else setDirection("right");

    document.documentElement.classList.toggle("nav-open");
  };
  if (changeColor) color = "navbar-transparent";

  const [navbarColor, setNavbarColor] = React.useState(color);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        (document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299) &&
        changeColor
      ) {
        setNavbarColor("");
      } else if (
        (document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300) &&
        changeColor
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <StrictMode>
      <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              target="_blank"
              title="Isimm Logo"
            >
              <Link to={"/index"}>
                <img src={ISIMMLogo} alt="isimm LOGO"></img>
              </Link>
            </NavbarBrand>

            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse,
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={navbarCollapse}>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Institut
                </DropdownToggle>
                <DropdownMenu>
                  <UncontrolledDropdown nav inNavbar direction={direction}>
                    <DropdownToggle nav caret size="lg">
                      ISIMM
                    </DropdownToggle>
                    <DropdownMenu>
                      <Link to={"/histoire"}>
                        <DropdownItem>Histoire</DropdownItem>
                      </Link>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret nav>
                          Equipe
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Conseil scientifique</DropdownItem>
                          <Link to={"/Departement"}>
                            <DropdownItem>Departements</DropdownItem>
                          </Link>
                          <DropdownItem>Centre 4C</DropdownItem>
                          <DropdownItem>Comité de qualité</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      {/* Add more ISIMM items as needed */}
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav inNavbar direction={direction}>
                    <DropdownToggle caret nav size="lg">
                      Vie étudiant
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Foyers</DropdownItem>
                      <DropdownItem>Restauration</DropdownItem>
                      {/* Add more ISIMM items as needed */}
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav inNavbar direction={direction}>
                    <DropdownToggle caret nav size="lg">
                      Vie Association
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Associations</DropdownItem>
                      <DropdownItem>Clubs</DropdownItem>
                      <DropdownItem>Activités</DropdownItem>
                      <DropdownItem>Evenements</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav inNavbar direction={direction}>
                    <DropdownToggle caret nav size="lg">
                      International
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Programme de mobilité</DropdownItem>
                      <DropdownItem>Stage à l'éxterieur</DropdownItem>
                      <DropdownItem>Partenaire internationaux</DropdownItem>

                      {/* Add more ISIMM items as needed */}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <DropdownItem>Consultation et offres</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Formation
                </DropdownToggle>
                <DropdownMenu>
                  <UncontrolledDropdown nav inNavbar direction={direction}>
                    <DropdownToggle caret nav size="lg">
                      Cycle Ingenieur
                    </DropdownToggle>
                    <DropdownMenu>
                      <Link to={"/Formationdepinfo#section5"}>
                        <DropdownItem>Informatique</DropdownItem>
                      </Link>
                      <DropdownItem>Electronique</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar direction={direction}>
                    <DropdownToggle caret nav>
                      Master
                    </DropdownToggle>
                    <DropdownMenu>
                      <Link to={"/Formationdepinfo#section2"}>
                        <DropdownItem>
                          Master de recherche en génie logiciel
                        </DropdownItem>
                      </Link>
                      <Link to={"/Formationdepinfo#section3"}>
                        <DropdownItem>
                          Master professionnelle en genie logiciel
                        </DropdownItem>
                      </Link>
                      <DropdownItem>
                        Master professionnelle data science
                      </DropdownItem>
                      <DropdownItem>
                        Master de recherche en microélectronique et
                        instrumentation
                      </DropdownItem>
                      <DropdownItem>
                        Master professionnelle ingénieurie en instrumentation
                        industrielle
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {/* Add more ISIMM items as needed */}
                  <Link to={"/Formationdepinfo#section4"}>
                    <DropdownItem>Cycle préparatoire</DropdownItem>
                  </Link>

                  <UncontrolledDropdown nav inNavbar direction={direction}>
                    <DropdownToggle caret nav>
                      Licence
                    </DropdownToggle>
                    <DropdownMenu>
                      <Link to={"/Formationdepinfo#section1"}>
                        <DropdownItem>
                          Licence science de l'Informatique
                        </DropdownItem>
                      </Link>
                      <DropdownItem>
                        Licence mathématiques appliquées
                      </DropdownItem>
                      <DropdownItem>Licence TIC</DropdownItem>
                      <DropdownItem>Licence EEA (SE)</DropdownItem>
                      <DropdownItem>Licence EEA (MIM)</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Recherche
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Laboratoire et unité de recherche</DropdownItem>

                  <DropdownItem>Projet de recherche</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Entreprise
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Les entreprises partenaire</DropdownItem>
                  <DropdownItem>
                    Listes des étudiants cherchant des stages
                  </DropdownItem>
                  <DropdownItem>Devenir un partenaire</DropdownItem>
                  <DropdownItem>Offre de stages</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </StrictMode>
  );
  IndexNavbar.prototype = {
    changeColor: PropTypes.bool.isRequired,
    color: PropTypes.string,
  };
}

export default IndexNavbar;
